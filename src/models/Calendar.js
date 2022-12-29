import { DataTypes } from "sequelize";
//Los datatypes los saco de la documentacion de sequelize
import { sequelize } from "../database/database.js";

export const Calendar = sequelize.define(
  "Calendar",
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
    description: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    time: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
  }
);
