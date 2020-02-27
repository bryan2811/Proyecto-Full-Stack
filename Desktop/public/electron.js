const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');


let appWindow;

function windowApp() {
    appWindow = new BrowserWindow({
        // Ajustes Visuales
        minWidth: 800,
        minHeight: 600,
        width: 1200,
        height: 800,
        center: true,
        show: false,
        icon: 'icon.png'
    });
    
    // Cuando la app es cerrada, cerrar la ventana.
    appWindow.on('closed', () => {
        appWindow = null;
    });

    // Cargar Archivo Principals
    appWindow.loadURL(
        isDev
          ? 'http://localhost:3000'
          : `file://${path.join(__dirname, "../build/index.html")}`
    );

    // Cuando la app este lista, mostrar la ventana.
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
}

// Creamos una ventana
app.on('ready', windowApp);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if(appWindow === null) {
        windowApp();
    }
})