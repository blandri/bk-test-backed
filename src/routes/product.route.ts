import express, { Request, Response } from 'express';
import ProductController from '../controllers/product.controller.js';
import FertilizerValidation from '../validations/fertilizer.validation.js';
import SeedValidation from '../validations/seed.validation.js';

const product = express.Router();

product.post(
'/create-fertilizer',
FertilizerValidation,
async (req: Request, res: Response) => {
await new ProductController().createFertilizer(req, res)
});

product.post(
    '/create-seed',
    SeedValidation,
    async (req: Request, res: Response) => {
    await new ProductController().createSeed(req, res)
});

product.get(
    '/seeds',
    async (req: Request, res: Response) => {
    await new ProductController().getSeeds(req, res)
});

product.get(
    '/fertilizers',
    async (req: Request, res: Response) => {
    await new ProductController().getFertilizers(req, res)
});

export default product;