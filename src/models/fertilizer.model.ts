import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Order from './order.model';

@Table({
  tableName: 'fertilizers'
})
export class Fertilizer extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  declare id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "name"
  })
  fertilizerName?: string;

  @HasMany(() => Order)
  orders!: Order[];
}
