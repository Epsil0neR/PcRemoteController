window.addEventListener("load", () => {
    let key = 'history-FileSystem.List';
    var btnTest = document.getElementById('btnTest');
    var divPaths = document.getElementById('paths');
    var divFolders = document.getElementById('folders');
    var divFiles = document.getElementById('files');

    var client = window.client;
    client.AddHandler('FileSystem.List',
        (msg) => {
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
                    msg.Data.folders.forEach(x => createAction(root + x, x, 'List', divFolders));
                }
                if (msg.Data.files instanceof Array) {
                    msg.Data.files.forEach(x => createAction(root + x, x, 'Exec', divFiles));
                }
            }
        });

    var orig = client.onConnectionStatusChange;
    client.onConnectionStatusChange = onConnChange;

    function onConnChange(status) {
        if (orig instanceof Function)
            orig(status);

        if (client.readyState == WebSocket.OPEN) {
            message('FileSystem.List', localStorage[key]);
        }
    }

    function createPath(url, text) {
        var a = document.createElement('a');
        a.text = text;
        a.addEventListener('click', () => message('FileSystem.List', url));
        divPaths.appendChild(a);
    }
    function createAction(url, text, action, el) {
        var a = document.createElement('a');
        a.text = text;
        a.addEventListener('click', () => message('FileSystem.' + action, url));
        el.appendChild(a);
    }

    btnTest.addEventListener('click', btnTestOnClick);

    function btnTestOnClick(parameters) {
        message('FileSystem.List', localStorage[key]);
    }

    onConnChange(client.readyState);
}, false);