import express from 'express';
import cors from 'cors';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import { userRouter } from './routers/user.routes.js';

// import { myKeys } from './config/keys.js';
const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));

app.use('/api', userRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
export { app };
