import { CreateOrderDTO } from "../controllers/order.controller";
import Order from "../models/order.model.js";
import { Seed } from "../models/seed.model.js";
import { Fertilizer } from "../models/fertilizer.model.js";

interface OrderWithCount {
    rows: Order[];
    count: number;
}

interface OrderServices {
  create(order: CreateOrderDTO): Promise<Order>;
  retrieveAll(offset: number, limit: number): Promise<OrderWithCount>;
//   retrieveById(orderId: number): Promise<Order | null>;
//   update(order: CreateOrderDTO, orderId: number): Promise<number>;
//   delete(farmerId: number): Promise<number>;
}

class OrderService implements OrderServices {
  async create(order: CreateOrderDTO): Promise<Order> {
    try {
        const newOrder = await Order.create({
          customerNames: order.customerNames,
          customerAddress: order.customerAddress,
          landSize: order.landSize,
          totalFertilizerAmount: order.totalFertilizerAmount,
          totalSeedAmount: order.totalSeedAmount,
          fertilizerId: order.fertilizerId,
          seedId: order.seedId
        }, {
            include: [Seed, Fertilizer]
        });
        
        return newOrder
      } catch (err) {
        throw new Error("Failed to create Order!");
      }
  }

  async update(order: any, orderId: number): Promise<any> {
    try {
        const updatedOrder = await Order.update(order, {
            where: {
                id: orderId,
            },
            returning: true,
        })
        return updatedOrder
    } catch (err) {
        throw new Error("Failed to update Order!");
    }
  }

  async retrieveAll(offset: number, limit: number): Promise<OrderWithCount> {
    try {
        const orders = await Order.findAndCountAll({
            offset: offset || 0,
            limit: limit || 5,
            order: [['customerNames', 'DESC']],
            include: [
                {
                    model: Fertilizer,
                    as: 'fertilizer',
                    attributes: ['fertilizerName']
                },
                {
                    model: Seed,
                    as: 'seed',
                    attributes: ['seedName']
                }
            ],
        })
        return {
        rows: orders.rows,
        count: orders.count
        }
    } catch (err) {
        throw new Error("Failed to retrieve Orders!");
    }
   }

//   async retrieveById(orderId: number): Promise<Order | null> {
//     try {
//         const order = await Order.findByPk(orderId)
//         return order
//     } catch (error) {
//         throw new Error("Failed to retrieve Order!");
//     }
//    }

//   async delete(farmerId: number): Promise<number> { }
}

export default OrderService;