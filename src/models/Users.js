import { DataTypes } from "sequelize";
//Los datatypes los saco de la documentacion de sequelize
import { sequelize } from "../database/database.js";
import { Bills } from "./Bills.js";
import { Calendar } from "./Calendar.js";
import { Notes } from "./Notes.js";
//modelos
import { Task } from "./Task.js";

export const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      //el primary key es para decirle que tiene que ser unico
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

//Relaciones
//Tareas
Users.hasMany(Task, {
  foreingKey: "usersId",
  sourceKey: "id",
});

Task.belongsTo(Users, {
  foreingKey: "usersId",
  targetId: "id",
});
//Bills
Users.hasMany(Bills, {
  foreingKey: "usersId",
  sourceKey: "id",
});

Bills.belongsTo(Users, {
  foreingKey: "usersId",
  targetId: "id",
});
//Notes
Users.hasMany(Notes, {
  foreingKey: "usersId",
  sourceKey: "id",
});

Notes.belongsTo(Users, {
  foreingKey: "usersId",
  targetId: "id",
});
//Calendar
Users.hasMany(Calendar, {
  foreingKey: "usersId",
  sourceKey: "id",
});

Calendar.belongsTo(Users, {
  foreingKey: "usersId",
  targetId: "id",
});
