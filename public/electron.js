const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');

const chokidar = isDev ? require('chokidar') : undefined;

function createWindow() {
    // Create the browser window.     
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../build/preload.js'),
        }
    })

    //load from dev server or from builded file
    win.loadURL(isDev ?
        'http://localhost:3000' :
        `file://${path.join(__dirname, '../build/index.html')}`
    );

    //watching preload.js
    if (chokidar) {
        chokidar.watch(path.join(__dirname, '../build/preload.js')).on('change', () => {
            win.reload();
        });
    }
}
app.on('ready', createWindow)