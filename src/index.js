import express from "express";
//app
import app from "./app.js";
//el puerto
import { PORT } from "./config.js";
//sequelize
import { sequelize } from "./database/database.js";
//modelos
import "./models/Task.js";
import "./models/Users.js";
import "./models/Bills.js";
import "./models/Calendar.js";
import "./models/Notes.js";

async function main() {
  try {
    //intenta conectarse con la base de datos
    //el metodo sync lo que hace es sincronizar con postgres y crearme las tablas
    //al poner en true todo el tiempo esta volviendo a generarme las tablas, tengo que ponerlo en false
    await sequelize.sync({ force: false });
    console.log("Connection has been establish successfully.");
    //se conecta con el puerto establecido
    app.listen(PORT);
    console.log("Server on port", PORT);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
