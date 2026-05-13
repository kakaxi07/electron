const { app, BrowserWindow } = require('electron');

const TARGET_URL = 'https://example.com';

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    center: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: require('path').join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      devTools: false
    }
  });

  mainWindow.removeMenu();
  mainWindow.loadURL(TARGET_URL);
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
