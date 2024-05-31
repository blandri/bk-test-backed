import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../config/db.config.js";
import Order from "../models/order.model.js";
import { Fertilizer } from "../models/fertilizer.model.js";
import { Seed } from "../models/seed.model.js";

class Database {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = this.connectToDatabase();
  }

  private connectToDatabase(): Sequelize {
    const sequelize = new Sequelize({
      database: config.DB,
      username: config.USER,
      password: config.PASSWORD,
      host: config.HOST,
      dialect: dialect,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      },
      models: [Fertilizer, Order, Seed]
    });

    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database:", err);
      });

    return sequelize;
  }

  public async syncModels() {
    await this.sequelize.sync();
  }
}

export default Database;
