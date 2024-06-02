import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const RegisterValidation = (req: Request, res: Response, next: NextFunction) => {
    const registerSchema = Joi.object({
        names: Joi.string().empty().required(),
        password: Joi.string().empty().required().min(4),
    });

    const result = registerSchema.validate(req.body);
    if (result.error) {
        res.status(400).json({
            message: result.error.details[0].message.replace(/["'`]+/g, '')
        });
    } else {
        next();
    }
};

export default RegisterValidation;
