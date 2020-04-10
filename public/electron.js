const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');

function createWindow() {
    // Create the browser window.     
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../build/static/js/preload.js'),
        }
    })

    win.loadURL(isDev ?
        'http://localhost:3000' :
        `file://${path.join(__dirname, '../build/index.html')}`
    );
}
app.on('ready', createWindow)