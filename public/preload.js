const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	test: (message) => ipcRenderer.send('teste', message)
});
