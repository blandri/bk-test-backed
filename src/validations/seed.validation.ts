import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const SeedValidation = (req: Request, res: Response, next: NextFunction) => {
    const seedSchema = Joi.object({
        name: Joi.string().empty().required(),
    });

    const result = seedSchema.validate(req.body);
    if (result.error) {
        res.status(400).json({
            message: result.error.details[0].message.replace(/["'`]+/g, '')
        });
    } else {
        next();
    }
};

export default SeedValidation;
