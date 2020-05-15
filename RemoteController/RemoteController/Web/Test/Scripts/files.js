window.addEventListener("load", () => {

    const cmdBase = 'FileSystem.';
    const cmdList = cmdBase + 'List';
    const cmdExec = cmdBase + 'Exec';
    let key = 'history-' + cmdList;
    var divPaths = document.getElementById('paths');
    createPath('', '..');
    var divFolders = document.getElementById('folders');
    var divFiles = document.getElementById('files');

    var client = window.client;
    client.AddHandler(cmdList, (msg) => {
        // Clear previously set containers.
        divPaths.innerHTML = '';
        divFiles.innerHTML = '';
        divFolders.innerHTML = '';

        if (msg.Data instanceof Object) {
            var path = msg.Data.path;
            createPath('', '..');
            var root = '';

            if (path instanceof Array)
                root = path.join('\\') + '\\';

            localStorage[key] = path instanceof Array ? path.join('\\') : '';

            if (path instanceof Array) {
                path.forEach((x, i) => {
                    var p = path.slice(0, i + 1);
                    var url = p.join('\\');
                    createPath(url, x);
                });
            }
            if (msg.Data.folders instanceof Array) {
                msg.Data.folders.forEach(x => createAction(root + x, x, cmdList, divFolders));
            }
            if (msg.Data.files instanceof Array) {
                msg.Data.files.forEach(x => createAction(root + x, x, cmdExec, divFiles));
            }
        } else {
            createPath('', '..');
        }
    });

    var orig = client.onConnectionStatusChange;
    client.onConnectionStatusChange = onConnChange;

    function onConnChange(status) {
        if (orig instanceof Function)
            orig(status);

        if (client.readyState === WebSocket.OPEN) {
            message(cmdList, localStorage[key]);
        }
    }

    function createPath(url, text) {
        var a = document.createElement('a');
        a.text = text;
        a.addEventListener('click', () => message(cmdList, url));
        divPaths.appendChild(a);
    }
    function createAction(url, text, action, el) {
        var a = document.createElement('a');
        a.text = text;
        a.addEventListener('click', () => message(action, url));
        el.appendChild(a);
    }

    onConnChange(client.readyState);
}, false);