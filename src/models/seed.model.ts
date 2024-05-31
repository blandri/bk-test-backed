import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Order from './order.model.js';

@Table({
  tableName: 'seeds'
})
export class Seed extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  declare id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "seedName",
    allowNull: false
  })
  seedName!: string;

  @HasMany(() => Order)
  orders!: Order[];
}
