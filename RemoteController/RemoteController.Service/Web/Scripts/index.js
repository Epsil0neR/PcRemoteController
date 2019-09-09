var url = "ws://localhost:6431/Testing";
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

    btn.addEventListener('click',
        () => {
            var m = new WebSocketMessage();
            m.ActionName = cmdName.value;
            m.Data = cmdParam.value;
            m.Type = WebSocketMessageType.Request;
            m.Hash = makeid();
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
            writeToScreen("Server state: " + client.readyState);
    }
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", init, false);