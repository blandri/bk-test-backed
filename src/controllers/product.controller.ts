import { Request, Response } from "express";
import ProductService from "../services/product.service";

export interface CreateProductDTO {
    name: string;
}

export default class ProductController {
    async createFertilizer(req: Request, res: Response) {
        try {
            const {name} = req.body
            const fertilizerDTO: CreateProductDTO = { name };
            const fertilizer = await new ProductService().createFertilizer(fertilizerDTO)
            return res.status(201).json({
              message: 'Fertilizer created successfully',
              data: fertilizer
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while creating fertilizer',
              error: error.message
            });
          }
    }

    async createSeed(req: Request, res: Response) {
        try {
            const {name} = req.body
            const seedDTO: CreateProductDTO = { name };
            const seed = await new ProductService().createSeed(seedDTO)
            return res.status(201).json({
              message: 'Seed created successfully',
              data: seed
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while creating seed',
              error: error.message
            });
          }
    }
}