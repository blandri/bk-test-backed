import { Request, Response } from "express";
import UserService from "../services/user.service.js";
import { comparePassword, generateToken, hashPassword } from "../helpers/auth.helper.js";

export interface CreateUserDTO {
    names: string,
    password: string,
}

export default class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const {names, password} = req.body
            const userDTO: CreateUserDTO = {names, password: hashPassword(password)};
            const user = await new UserService().create(userDTO)
            const token = generateToken({ userId: user.id }, '1d');
            return res.status(201).json({
              message: 'User created successfully',
              token
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while creating user!',
              error: error.message
            });
          }
    }

    async login(req: Request, res: Response) {
        try {
          const user = await new UserService().userLogin(req.body.names)
    
          if(user){
            const validation = await comparePassword(
              req.body.password,
              user.password
            );
            if (validation) {
              const token = await generateToken(
                {
                  userId: user.id,
                  name: user.names,
                },
                '1d'
              );
              return res.status(201).header('authenticate', token).json({
                message: 'Logged in successfully',
                token,
                name: user.names,
              });
            }
            return res.status(400).json({ message: 'Invalid password' });
          }
          return res.status(400).json({ message: 'This account does not exist' });
        } catch (error) {console.log(error)
          return res.status(404).json({
            message: 'Error occured while logging in',
            error
          });
        }
      }
}