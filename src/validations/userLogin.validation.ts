import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const LoginValidation = (req: Request, res: Response, next: NextFunction) => {
    const loginSchema = Joi.object({
        names: Joi.string().empty().required(),
        password: Joi.string().empty().required(),
    });

    const result = loginSchema.validate(req.body);
    if (result.error) {
        res.status(400).json({
            message: result.error.details[0].message.replace(/["'`]+/g, '')
        });
    } else {
        next();
    }
};

export default LoginValidation;
