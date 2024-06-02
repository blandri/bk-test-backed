import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const OrderValidation = (req: Request, res: Response, next: NextFunction) => {
    const orderSchema = Joi.object({
        customerNames: Joi.string().empty().required(),
        customerAddress: Joi.string().empty().required(),
        landSize: Joi.string().empty().required(),
        totalFertilizerAmount: Joi.string().empty().required(),
        totalSeedAmount: Joi.string().empty().required(),
        fertilizerId: Joi.number().required(),
        seedId: Joi.number().required(),
    });

    const result = orderSchema.validate(req.body);
    if (result.error) {
        res.status(400).json({
            message: result.error.details[0].message.replace(/["'`]+/g, '')
        });
    } else {
        next();
    }
};

export default OrderValidation;
