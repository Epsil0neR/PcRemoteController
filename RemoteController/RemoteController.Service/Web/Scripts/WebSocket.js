WebSocketMessageType = Object.freeze({
    Request: 0,
    Notification: 1,
    Response: 2,
    Error: 3,
    0: "Request",
    1: "Notification",
    2: "Response",
    3: "Error"
});

WebSocketMessage = function () { };
WebSocketMessage.prototype.__Type = WebSocketMessageType.Request;
WebSocketMessage.prototype.__ActionName = null;
WebSocketMessage.prototype.__Hash = null;
WebSocketMessage.prototype.__Data = null;
Object.defineProperties(WebSocketMessage.prototype,
    {
        Type: {
            get: function () { return this.__Type; },
            set: function (value) {
                if (!isNaN(parseFloat(value))
                    && isFinite(value)
                    && WebSocketMessageType[value] !== null)
                    this.__Type = value;
            }
        },
        ActionName: {
            get: function () { return this.__ActionName; },
            set: function (value) { this.__ActionName = value; }
        },
        Hash: {
            get: function () { return this.__Hash; },
            set: function (value) { this.__Hash = value; }
        },
        Data: {
            get: function () { return this.__Data; },
            set: function (value) { this.__Data = value; }
        }
    });
WebSocketMessage.parse = function (object) {
    var rv = new WebSocketMessage();
    rv.Type = object.Type;
    rv.ActionName = object.ActionName;
    rv.Hash = object.Hash;
    rv.Data = object.Data;
    return rv;
}
WebSocketMessage.prototype.toJSON = function () {
    var rv = {
        Type: this.Type,
        ActionName: this.ActionName,
        Hash: this.Hash,
        Data: this.Data
    };
    return rv;
}


function WebSocketClient(url) {
    this.autoReconnectInterval = 5 * 1000;	// ms
    this.url = url;

    var that = this;
    this.__handlersWebSocketClient = {
        close: function (e) {
            console.warn("Server closed: ", e.code, e);
            if (e.code !== 1000) //1000 is a CLOSE_NORMAL, on which client don't need to reconnect.
                that.reconnect();
        },
        error: function (e) {
            switch (e.code) {
                case "ECONNREFUSED":
                    that.reconnect(e);
                    break;
                default:
                    that.onerror(e);
                    break;
            }
        }
    }
}
WebSocketClient.prototype.open = function (autoReconnectInterval) {
    if (autoReconnectInterval !== null &&
        typeof (autoReconnectInterval) === "number" &&
        !isNaN(autoReconnectInterval) &&
        autoReconnectInterval > 0)
        this.autoReconnectInterval = autoReconnectInterval;

    try {
        this.instance = new WebSocket(this.url);
        this.__createdInstance(this.instance);
    } catch (error) { /**/ }
}
WebSocketClient.prototype.send = function (data, option) {
    try {
        this.instance.send(data, option);
    } catch (e) {
        this.instance.emit("error", e);
    }
}
WebSocketClient.prototype.reconnect = function (e) {
    this.__disposingInstance(this.instance);
    this.instance.close();
    var that = this;
    setTimeout(function () {
        that.open();
    }, this.autoReconnectInterval);
}
WebSocketClient.prototype.onerror = function (e) { /*console.log("WebSocketClient: error", arguments);*/ }
WebSocketClient.prototype.__createdInstance = function (instance) {
    for (evt in this.__handlersWebSocketClient) {
        if (this.__handlersWebSocketClient.hasOwnProperty(evt))
            instance.addEventListener(evt, this.__handlersWebSocketClient[evt]);
    }
};
WebSocketClient.prototype.__disposingInstance = function (instance) {
    for (evt in this.__handlersWebSocketClient) {
        if (this.__handlersWebSocketClient.hasOwnProperty(evt))
            instance.removeEventListener(evt, this.__handlersWebSocketClient[evt]);
    }
};
Object.defineProperty(WebSocketClient.prototype, "readyState",
    {
        get: function () {
            if (this.instance instanceof WebSocket)
                return this.instance.readyState;
            return WebSocket.CLOSED;
        }
    });




NeptuneSocketClient = function (url, retryTimeInMs) {
    var that = this;
    this.__wasOpened = false;
    this.__handlersWebSocketMessage = {
        open: function () {
            console.log('opened');
            that.__wasOpened = true;
            that.onConnectionStatusChange(that.readyState);
        },
        close: function (e) {
            if (that.__wasOpened === true)
                that.onConnectionStatusChange(that.readyState);
            that.__wasOpened = false;
        },
        message: function (e) {
            //TODO: What if e.data is not json?
            var data = JSON.parse(e.data);
            var msg = WebSocketMessage.parse(data);
            console.info("Message: ", msg);

            var filterCheck = function (filter) {
                return filter(msg) === true;
            };
            if (that.__filters.length === 0 || that.__filters.every(filterCheck)) {
                var actionname = msg.ActionName === null ? "" : msg.ActionName.toLowerCase();
                var handlers = that.__handlers[actionname];
                if (handlers instanceof Array) {
                    handlers.forEach(function (handler) {
                        handler(msg);
                    });
                }
            }
        }
    };
    WebSocketClient.call(this, url);
    this.open(retryTimeInMs);
};
NeptuneSocketClient.prototype = Object.create(WebSocketClient.prototype);
NeptuneSocketClient.prototype.constructor = NeptuneSocketClient;
NeptuneSocketClient.prototype.__handlers = {};
NeptuneSocketClient.prototype.__filters = [];
NeptuneSocketClient.prototype.__createdInstance = function (instance) {
    for (evt in this.__handlersWebSocketMessage) {
        if (this.__handlersWebSocketMessage.hasOwnProperty(evt))
            instance.addEventListener(evt, this.__handlersWebSocketMessage[evt]);
    }
    WebSocketClient.prototype.__createdInstance.call(this, instance);
};
NeptuneSocketClient.prototype.__disposingInstance = function (instance) {
    for (evt in this.__handlersWebSocketMessage) {
        if (this.__handlersWebSocketMessage.hasOwnProperty(evt))
            instance.removeEventListener(evt, this.__handlersWebSocketMessage[evt]);
    }
    WebSocketClient.prototype.__disposingInstance.call(this, instance);
};
NeptuneSocketClient.prototype.onConnectionStatusChange = function (status) {
    console.info("NeptuneSocketClient.onConnectionStatusChange: ", status);
};
NeptuneSocketClient.prototype.Send = function (webSocketMessage) {
    if (!(webSocketMessage instanceof WebSocketMessage))
        return; //TODO: Throw exception.

    this.instance.send(JSON.stringify(webSocketMessage));
};

//Add/remove handler to specific action
NeptuneSocketClient.prototype.AddHandler = function (actionName, handler) {
    if (!(actionName instanceof String || typeof actionName === 'string'))
        return; //TODO: Throw exception.
    if (!(handler instanceof Function))
        return;

    actionName = actionName.toLowerCase();

    if (!this.__handlers.hasOwnProperty(actionName))
        this.__handlers[actionName] = [handler];
    else
        this.__handlers[actionName].push(handler);
};
NeptuneSocketClient.prototype.RemoveHandler = function (actionName, handler) {
    if (!(actionName instanceof String || typeof actionName === 'string'))
        return; //TODO: Throw exception.
    if (!(handler instanceof Function))
        return;

    actionName = actionName.toLowerCase();
    var rv = 0;
    if (this.__handlers.hasOwnProperty(actionName)) {
        var arr = this.__handlers[actionName];
        var ind = arr.indexOf(handler);
        while (ind >= 0) {
            arr.splice(ind, 1);
            ind = arr.indexOf(handler);
            rv++;
        }
    }
    return rv;
};

//Add/remove filter to check if message received from web socket can be handled.
NeptuneSocketClient.prototype.AddFilter = function (filter) {
    if (!(filter instanceof Function))
        return;

    this.__filters.push(filter);
};
NeptuneSocketClient.prototype.RemoveFilter = function (filter) {
    if (!(filter instanceof Function))
        return;

    var rv = 0;
    var ind = this.__filters.indexOf(filter);
    while (ind >= 0) {
        this.__filters.splice(ind, 1);
        ind = this.__filters.indexOf(filter);
        rv++;
    }
    return rv;
};