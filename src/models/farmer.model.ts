import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "farmers",
})
export default class Farmer extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  declare id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "firstName"
  })
  firstName?: string;

  @Column({
    type: DataType.STRING(255),
    field: "lastName"
  })
  lastName?: string;
}