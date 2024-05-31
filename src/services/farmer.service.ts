import { CreateFarmerDTO } from "../controllers/farmer.controller";
import Farmer from "../models/farmer.model";

interface FarmerServices {
  create(farmer: CreateFarmerDTO): Promise<Farmer>;
}

class FarmerService implements FarmerServices {
  async create(farmer: CreateFarmerDTO): Promise<Farmer> {
    try {
        const newFarmer = await Farmer.create({
          firstName: farmer.firstName,
          lastName: farmer.lastName
        });
        
        return newFarmer
      } catch (err) {
        throw new Error("Failed to create Farmer!");
      }
  }
}

export default FarmerService;