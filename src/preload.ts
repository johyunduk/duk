import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('debuggerAPI', {
  onPayload: (callback: (payload: unknown) => void) => {
    ipcRenderer.on('duk:payload', (_event, payload) => callback(payload));
  },
  removePayloadListener: () => {
    ipcRenderer.removeAllListeners('duk:payload');
  },
});
