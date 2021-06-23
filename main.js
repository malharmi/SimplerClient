let { app, BrowserWindow } = require("electron");

mainWindow = null;

let createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        autoHideMenuBar: true,
    });
    mainWindow.loadFile((__dirname = "./ui/index.html"));

    mainWindow.on("ready-to-show", () => {
        mainWindow.show();
    });
};

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
