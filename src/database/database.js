import Sequelize from "sequelize";

//lo primero que hago es conectar mi base de datos
//y lo hago por medio de SEQUELIZE
export const sequelize = new Sequelize("miagenda", "postgres", "1234", {
  host: "127.0.0.1",
  dialect: "postgres",
});
