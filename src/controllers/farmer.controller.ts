import { Request, Response } from "express";
import FarmerService from "../services/farmer.service";

export interface CreateFarmerDTO {
    firstName: string;
    lastName: string;
}

export default class FarmerController {
    async createFarmer(req: Request, res: Response) {
        try {
            const {firstName, lastName} = req.body
            const farmerDTO: CreateFarmerDTO = { firstName, lastName };
            const farmer = await new FarmerService().create(farmerDTO)
            return res.status(201).json({
              message: 'Farmer created successfully',
              data: farmer
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while retrieving aprojects',
              error: error.message
            });
          }
    }
}