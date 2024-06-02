import express, { Request, Response } from 'express';
import UserController from '../controllers/user.controller.js';
import RegisterValidation from '../validations/userRegister.validation.js';
import LoginValidation from '../validations/userLogin.validation.js';

const user = express.Router();

user.post(
'/register',
RegisterValidation,
async (req: Request, res: Response) => {
await new UserController().createUser(req, res)
});

user.post(
'/login',
LoginValidation,
async (req: Request, res: Response) => {
await new UserController().login(req, res)
});

export default user;