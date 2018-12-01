const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
  })

  win.setMenu(null)
  win.maximize()
  win.loadFile('index.html')
}

app.on('ready', createWindow)