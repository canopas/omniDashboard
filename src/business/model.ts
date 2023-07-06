import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.config";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Business extends Model {
  @Field()
  public id!: number;
  @Field()
  public name!: string;
  @Field()
  public description!: string;
  @Field({ nullable: true })
  public address: string;
  @Field()
  public business_type_id!: number;
  @Field({ nullable: true })
  public status: number;
  @Field({ nullable: true })
  public username: string;
  @Field({ nullable: true })
  public password: string;
  @Field({ nullable: true })
  public link_id?: string;
}

Business.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    business_type_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    status: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "business_details",
  },
);

export default Business;
