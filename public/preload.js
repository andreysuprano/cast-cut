const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	electron: (message) => ipcRenderer.send('video', message)
});
