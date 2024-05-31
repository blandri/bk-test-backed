import { CreateProductDTO } from "../controllers/product.controller";
import { Fertilizer } from "../models/fertilizer.model";
import { Seed } from "../models/seed.model";

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
}

export default ProductService;