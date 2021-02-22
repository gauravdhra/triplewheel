const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        // width: 1500,
        //  height: 1200,
        minWidth: 1300,
        minHeight: 1200,
        icon: __dirname + "/icon.ico",
        webPreferences: {
            nodeIntegration: true
        },
        // frame: false   
        show: false,
        fullscreen: false
    })

    mainWindow.loadFile('./index.html');

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        mainWindow.maximize();
    });

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => {
        mainWindow = null;
    })

}

Menu.setApplicationMenu(null);

app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+D', () => {
        mainWindow.webContents.openDevTools();
    })
}).then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})