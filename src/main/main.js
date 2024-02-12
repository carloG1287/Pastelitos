import { app, BrowserWindow } from 'electron';
import * as path from 'path';
// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({});

  if (isDev) {
    // Modo desarrollo: Cargar el servidor Vite
    mainWindow.loadURL('http://localhost:5173');
  } else {
    // Modo producción: Cargar archivos locales usando el protocolo "file"
    // eslint-disable-next-line no-undef
    mainWindow.loadURL(`file://${path.join(__dirname, '../renderer/index.html')}`);
  }

  mainWindow.on('closed', () => (mainWindow = null));
}


app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  // eslint-disable-next-line no-undef
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow == null) {
    createWindow();
  }
});
