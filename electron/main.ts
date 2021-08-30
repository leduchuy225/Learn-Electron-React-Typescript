import { app, BrowserWindow, Menu, MenuItem } from "electron";
import * as path from "path";
import * as isDev from "electron-is-dev";

/* import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer"; */

let mainWindow: BrowserWindow | null = null;
let subWindow: BrowserWindow | null = null;

const localUrl = "http://localhost:3000/index.html";
const prodPath = `file://${__dirname}/../index.html`;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Todo List",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  isDev
    ? mainWindow.loadURL(`${localUrl}?viewA`)
    : mainWindow.loadURL(`${prodPath}?viewA`); // 'build/index.html'

  // Hot Reloading
  if (isDev) {
    // 'node_modules/.bin/electronPath'
    require("electron-reload")(__dirname, {
      electron: path.join(
        __dirname,
        "..",
        "..",
        "node_modules",
        ".bin",
        "electron"
      ),
      forceHardReset: true,
      hardResetMethod: "exit",
    });
  }

  // DevTools
  /*  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err)); */

  if (isDev) {
    // window.webContents.openDevTools();
  }

  const customMenu = new MenuItem({
    label: "Utility",
    submenu: [
      {
        label: "RAM && CPU",
        click: openRamCPUWindow,
      },
    ],
  });
  const menu = Menu.getApplicationMenu();
  menu?.append(customMenu);
  Menu.setApplicationMenu(menu);

  mainWindow.on("closed", function () {
    app.quit();
  });

  mainWindow.on("closed", () => (mainWindow = null));
}

function openRamCPUWindow() {
  subWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "RAM & CPU",
  });

  isDev
    ? subWindow.loadURL(`${localUrl}?viewB`)
    : subWindow.loadURL(`${prodPath}?viewB`); // 'build/index.html'

  subWindow.menuBarVisible = false;

  subWindow.on("close", function () {
    subWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
