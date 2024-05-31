import express, { Request, Response } from 'express';
import FarmerController from '../controllers/farmer.controller';

const farmer = express.Router();

farmer.post(
    '/create-farmer',
    async (req: Request, res: Response) => {
      await new FarmerController().createFarmer(req, res)
    });

export default farmer;