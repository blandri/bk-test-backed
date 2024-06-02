import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const FertilizerValidation = (req: Request, res: Response, next: NextFunction) => {
    const fertilizerSchema = Joi.object({
        name: Joi.string().empty().required(),
    });

    const result = fertilizerSchema.validate(req.body);
    if (result.error) {
        res.status(400).json({
            message: result.error.details[0].message.replace(/["'`]+/g, '')
        });
    } else {
        next();
    }
};

export default FertilizerValidation;