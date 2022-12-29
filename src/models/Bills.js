import { DataTypes } from "sequelize";
//Los datatypes los saco de la documentacion de sequelize
import { sequelize } from "../database/database.js";

export const Bills = sequelize.define(
  "Bills",
  {
    id: {
      type: DataTypes.INTEGER,
      //el primary key es para decirle que tiene que ser unico
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
