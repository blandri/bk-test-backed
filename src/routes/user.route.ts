import express, { Request, Response } from 'express';
import UserController from '../controllers/user.controller.js';

const user = express.Router();

user.post(
'/register',
async (req: Request, res: Response) => {
await new UserController().createUser(req, res)
});

user.post(
'/login',
async (req: Request, res: Response) => {
await new UserController().login(req, res)
});

export default user;