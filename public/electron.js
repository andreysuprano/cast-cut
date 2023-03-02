const path = require('path');
const fs = require('fs');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const trimVideo = require('./ffmpeg-wrapper');
const express = require('express');
const http = require('http');

const expressServer = express();
//Express Server -> WebSocket
const server = http.createServer(expressServer);
const sio = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000'
	}
});

//const io = new Server(server);

server.listen(4001);

sio.on('connection', (socket) => {
	console.log('conectou');
	socket.on('video-status', (data) => {
		console.log(data);
	});
});

function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		height: 800,
		minHeight: 800,
		width: 800,
		minWidth: 800,
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js')
		},
		frame: false,
		icon: __dirname + '/icon.ico',
		maximizable: false
	});

	// and load the index.html of the app.
	// win.loadFile("index.html");
	win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
	// Open the DevTools.
	if (isDev) {
		win.webContents.openDevTools({ mode: 'detach' });
	}
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

ipcMain.on('video', (event, data) => {
	data.cortes.forEach((corte, index) => {
		trimVideo(event, corte.start, corte.end, data.videoPath, index).catch((err) => {
			event.reply('Error - Not start proccess.');
		});
	});
});
