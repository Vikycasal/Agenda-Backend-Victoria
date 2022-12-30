import express from "express";
import taskRoutes from "./routes/task.route.js";
import billsRoutes from "./routes/bills.route.js";
import calendarRoutes from "./routes/calendar.route.js";

const app = express();

//middlewares (algunas funciones que se ejecutan antes que lleguen a las rutas)
//cada vez que un cliente me mande un formato json, mi aplicacion lo lee
// y lo transforma a javascript
app.use(express.json());
//cuando me envien un dato a traves de un formulario, tambien la pueda entender
app.use(express.urlencoded({ extended: false }));

//rutas
app.use(taskRoutes);
app.use(billsRoutes);
app.use(calendarRoutes);

export default app;
