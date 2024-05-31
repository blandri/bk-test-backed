import express, { Request, Response } from 'express';
import OrderController from '../controllers/order.controller.js';

const order = express.Router();

order.post(
'/create-order',
async (req: Request, res: Response) => {
await new OrderController().createOrder(req, res)
});

order.patch(
    '/pay-order/:id',
    async (req: Request, res: Response) => {
    await new OrderController().payOrder(req, res)
});

order.patch(
    '/approve-order/:id',
    async (req: Request, res: Response) => {
    await new OrderController().approveOrder(req, res)
});

order.get(
    '/orders/:offset/:limit',
    async (req: Request, res: Response) => {
    await new OrderController().getAllOrders(req, res)
});

// order.get(
//     '/orders/:id',
//     async (req: Request, res: Response) => {
//     await new OrderController().getOrderById(req, res)
// });

export default order;