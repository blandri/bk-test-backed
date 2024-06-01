import { CreateProductDTO } from "../controllers/product.controller";
import { Fertilizer } from "../models/fertilizer.model.js";
import { Seed } from "../models/seed.model.js";

interface ProductServices {
    createFertilizer(fertilizer: CreateProductDTO): Promise<Fertilizer>;
    createSeed(seed: CreateProductDTO): Promise<Seed>;
}

class ProductService implements ProductServices {
  async createFertilizer(fertilizer: CreateProductDTO): Promise<Fertilizer> {
    try {
        const newFertilizer = await Fertilizer.create({
            fertilizerName: fertilizer.name
        })

        return newFertilizer
      } catch (err) {
        throw new Error("Failed to create Fertilizer!");
      }
  }

  async createSeed(seed: CreateProductDTO): Promise<Seed> {
    try {
      const newSeed = await Seed.create({
        seedName: seed.name
      });
      return newSeed;
    } catch (err) {
      throw new Error("Failed to create seed!");
    }
  }

  async retrieveAllSeeds(): Promise<any> {
    try {
      const seeds = await Seed.findAndCountAll({order: [['seedName', 'DESC']]})
      return {
      rows: seeds.rows,
      count: seeds.count
      }
    } catch (err) {
        throw new Error("Failed to retrieve seeds!");
    }
  }

  async retrieveAllFertilizers(): Promise<any> {
    try {
      const fertilizers = await Fertilizer.findAndCountAll({order: [['fertilizerName', 'DESC']]})
      return {
      rows: fertilizers.rows,
      count: fertilizers.count
      }
    } catch (err) {
        throw new Error("Failed to retrieve fertilizers!");
    }
  }
}

export default ProductService;