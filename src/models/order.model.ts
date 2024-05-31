import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Fertilizer } from "./fertilizer.model";
import { Seed } from "./seed.model";

@Table({
  tableName: "orders",
})
export default class Order extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  declare id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "customerNames"
  })
  customerNames?: string;

  @Column({
    type: DataType.STRING(255),
    field: "customerAddress"
  })
  customerAddress?: string;

  @Column({
    type: DataType.STRING(255),
    field: "landSize"
  })
  landSize?: string;

  @Column({
    type: DataType.STRING(255),
    field: "totalFertilizerAmount"
  })
  totalFertilizerAmount?: string;

  @Column({
    type: DataType.STRING(255),
    field: "totalSeedAmount"
  })
  totalSeedAmount?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: "payed",
    defaultValue: false,
  })
  payed?: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: "approved",
    defaultValue: false,
  })
  approved?: boolean;

  @ForeignKey(() => Fertilizer)

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  fertilizerId!: number;

  @BelongsTo(() => Fertilizer)
  fertilizer!: Fertilizer;

  @ForeignKey(() => Seed)

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  seedId!: number;

  @BelongsTo(() => Seed)
  seed!: Seed;
}