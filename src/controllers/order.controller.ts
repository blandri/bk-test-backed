import { Request, Response } from "express";
import OrderService from "../services/order.service.js";

export interface CreateOrderDTO {
    customerNames: string,
    customerAddress: string,
    landSize: string,
    totalFertilizerAmount: string,
    totalSeedAmount: string,
    fertilizerId: number,
    seedId: number
}

export default class OrderController {
    async createOrder(req: Request, res: Response) {
        try {
            const {customerNames, customerAddress, landSize, totalFertilizerAmount, totalSeedAmount, fertilizerId, seedId} = req.body
            const orderDTO: CreateOrderDTO = { customerNames, customerAddress, landSize, totalFertilizerAmount, totalSeedAmount, fertilizerId, seedId };
            const order = await new OrderService().create(orderDTO)
            return res.status(201).json({
              message: 'Order created successfully',
              data: order
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while creating order!',
              error: error.message
            });
          }
    }

    async getAllOrders(req: Request, res: Response) {
        try {
            const offset = parseInt(req.params.offset)
            const limit = parseInt(req.params.limit)
            const orders = await new OrderService().retrieveAll(offset, limit)
            return res.status(200).json({
              message: 'Retrieved orders successfully',
              data: orders
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while retrieving orders',
              error: error.message
            });
          }
    }
    // async getOrderById(req: Request, res: Response) {}
    async payOrder(req: Request, res: Response) {
        try {
            const orderId = parseInt(req.params.id)
            const order = await new OrderService().update({ payed: true }, orderId)
            return res.status(201).json({
              message: 'Order payed successfully',
              data: order
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while paying order!',
              error: error.message
            });
          }
    }

    async approveOrder(req: Request, res: Response) {
        try {
            const orderId = parseInt(req.params.id)
            const order = await new OrderService().update({ approved: true }, orderId)
            return res.status(201).json({
              message: 'Order approved successfully',
              data: order
            });
          } catch (error) {
            return res.status(500).json({
              message: 'Error occured while approving order!',
              error: error.message
            });
          }
    }
}