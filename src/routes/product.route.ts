import express, { Request, Response } from 'express';
import ProductController from '../controllers/product.controller.js';

const product = express.Router();

product.post(
'/create-fertilizer',
async (req: Request, res: Response) => {
await new ProductController().createFertilizer(req, res)
});

product.post(
    '/create-seed',
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