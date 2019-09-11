window.addEventListener("load", () => {
    var btnTest = document.getElementById('btnTest');
    var divFolders = document.getElementById('folders');
    var divFiles = document.getElementById('files');

    var client = window.client;
    client.AddHandler('FileSystem.List',
        (msg) => {
            divFiles.innerHTML = '';
            divFolders.innerHTML = '';

            if (msg.Data instanceof Object) {
                if (msg.Data.folders instanceof Array) {
                    msg.Data.folders.forEach(x => {
                        var a = document.createElement('a');
                        a.text = x;
                        a.addEventListener("click", () => message('FileSystem.List', x));
                        divFolders.appendChild(a);
                    });
                }
                if (msg.Data.files instanceof Array) {
                    msg.Data.files.forEach(x => {
                        var a = document.createElement('a');
                        a.text = x;
                        a.addEventListener("click", ()=> message('FileSystem.Exec', x));

                        divFiles.appendChild(a);
                    });
                }
            }
        });


    btnTest.addEventListener('click', btnTestOnClick);

    function btnTestOnClick(parameters) {
        message('FileSystem.List');
    }
}, false);