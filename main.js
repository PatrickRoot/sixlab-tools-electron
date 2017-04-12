const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('window-all-closed', () => {
    app.quit()
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.on('closed', () => {
        mainWindow = null
    });

    mainWindow.loadURL(`file://${__dirname}/build/index.html`);
});

