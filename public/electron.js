const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');

function createWindow() {
    // Create the browser window.     
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
        }
    })

    //load from dev server or from builded file
    win.loadURL(isDev ?
        'http://localhost:3000' :
        `file://${path.join(__dirname, './index.html')}`
    );
}
app.on('ready', createWindow)