import express from 'express';
const userRouter = express.Router();
import { addUser, getAllUsers } from '../controllers/user.controllers.js';

userRouter.get('/getusers', getAllUsers);
userRouter.post('/addUser', addUser);

export { userRouter };
