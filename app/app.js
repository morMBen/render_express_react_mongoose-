import express from 'express';
import { userRouter } from './routers/user.routes.js';
// import { myKeys } from './config/keys.js';
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api', userRouter);

export { app };
