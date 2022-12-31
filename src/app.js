import express from "express";
import taskRoutes from "./routes/task.route.js";
import billsRoutes from "./routes/bills.route.js";
import calendarRoutes from "./routes/calendar.route.js";
import notesRoutes from "./routes/notes.route.js";
import usersRoutes from "./routes/users.route.js";

const app = express();

//middlewares (algunas funciones que se ejecutan antes que lleguen a las rutas)
//cada vez que un cliente me mande un formato json, mi aplicacion lo lee
// y lo transforma a javascript
app.use(express.json());
//cuando me envien un dato a traves de un formulario, tambien la pueda entender
app.use(express.urlencoded({ extended: false }));

//de momento las rutas estan terminadas, a medida que le demos funcionalidad al front recien vamos a ir agregandole cosas al back
//la base de datos esta perfecta y terminada y no se toca
//y a su vez se va documenntando el codigo
//rutas
app.use(taskRoutes);
app.use(billsRoutes);
app.use(calendarRoutes);
app.use(notesRoutes);
app.use(usersRoutes);

export default app;
