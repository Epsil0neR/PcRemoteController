var url = "ws://localhost:6431/Testing";
var storage_url = localStorage.getItem('url');
if (storage_url !== null)
    url = storage_url;
else
    localStorage.setItem('url', url);

var client;
var output;
var btn;
var cmdName;
var cmdParam;

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function init() {
    output = document.getElementById("output");
    btn = document.getElementById("btnPing");
    cmdName = document.getElementById("cmdName");
    cmdParam = document.getElementById("cmdParam");
    doWebSocket();
}

function doWebSocket() {
    client = new NeptuneSocketClient(url, 5000);

    if (btn !== null)
        btn.addEventListener('click',
            () => {
                var m = new WebSocketMessage();
                m.ActionName = cmdName.value;
                m.Data = cmdParam.value;
                m.Type = WebSocketMessageType.Request;
                m.Hash = makeid();

                var action = m.ActionName.toLowerCase();
                handle(action);
                client.Send(m);
                console.log('btnPing clicked', this);
                writeToScreen("Request: " + JSON.stringify(m));
            });

    client.onConnectionStatusChange = onConnectionStatusChange;

    onConnectionStatusChange();



    function onConnectionStatusChange() {
        if (client.readyState === WebSocket.OPEN)
            writeToScreen("Connected");
        else
            writeToScreen("Server state: " + webSocketConnectionStatusToString(client.readyState));
    }

    function webSocketConnectionStatusToString(status) {
        if (status === WebSocket.CLOSED) return "Closed";
        if (status === WebSocket.CLOSING) return "Closing";
        if (status === WebSocket.CONNECTING) return "Connecting";
        if (status === WebSocket.open) return "Open";

        return status;
    }
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = '[' + new Date().toISOString() + '] ' + message;
    //output.appendChild(pre);
    output.prepend(pre);
}

window.addEventListener("load", init, false);

function message(action, data) {
    if (client.readyState !== WebSocket.OPEN)
        return;

    handle(action);
    var m = new WebSocketMessage();
    m.ActionName = action;
    m.Data = data;
    m.Type = WebSocketMessageType.Request;
    m.Hash = makeid();
    writeToScreen("Request: " + m.Hash + "<br />" + JSON.stringify(m));
    client.Send(m);
}

var handlers = [];
function handle(action) {
    if (handlers.indexOf(action) < 0) {
        client.AddHandler(action, clientHandler);
        handlers.push(action);
    }
}

/**
 * @param {WebSocketMessage} msg Message
 */
function clientHandler(msg) {
    writeToScreen("Response: "+ msg.Hash + "<br /><pre>" + JSON.stringify(msg, undefined, 4) + "</pre>");
}