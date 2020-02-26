const { app, BrowserWindow } = require('electron');


let appWindow;

function windowApp() {
    appWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        width: 1200,
        height: 800,
        center: true,
        show: false
    });
    
    // Cuando la app es cerrada, cerrar la ventana.
    appWindow.on('closed', () => {
        appWindow = null;
    });

    // Cargar Archivo Principals
    appWindow.loadFile('./index.html');

    // Cuando la app este lista, mostrar la ventana.
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
}

// Creamos una ventana
app.on('ready', windowApp);