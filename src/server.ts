import express from 'express';
import { BrowserWindow } from 'electron';

const PORT = 23517;

export function startServer(getWindow: () => BrowserWindow | null) {
  const app = express();
  app.use(express.json());

  app.post('/', (req, res) => {
    const payload = req.body;
    const win = getWindow();
    if (win) {
      win.webContents.send('duk:payload', payload);
    }
    res.json({ ok: true });
  });

  app.listen(PORT, () => {
    console.log(`Debugger server listening on port ${PORT}`);
  });
}
