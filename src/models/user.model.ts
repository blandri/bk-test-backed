import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users'
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  declare id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "names",
    allowNull: false
  })
  names!: string;

  @Column({
    type: DataType.STRING(255),
    field: "password",
    allowNull: false
  })
  password!: string;
}
