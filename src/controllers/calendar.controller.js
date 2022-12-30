import { Calendar } from "../models/Calendar.js";

//ruta para traerme todos los datos del calendario
export const getCalendars = async (req, res) => {
  try {
    const calendar = await Calendar.findAll();
    res.json(calendar);
  } catch (error) {
    return res.status(500).json({ message: "No se pudieron traer los datos" });
  }
};

//ruta para encontrar tarea del calendario por id
export const getCalendar = async (req, res) => {
  try {
    const { id } = req.params;
    const calendar = await Calendar.findOne({
      where: {
        id,
      },
    });

    if (!calendar)
      return res
        .status(404)
        .json({ message: "La tarea que estas buscando no existe" });

    res.json(calendar);
  } catch (error) {
    res.status(500).json({ message: "La tarea que estas buscando no existe" });
  }
};

//ruta para crear una tarea dentro del calendario
export const createCalendar = async (req, res) => {
  const { title, description, date, time } = req.body;

  try {
    const newCalendar = await Calendar.create({
      title,
      description,
      date,
      time,
    });

    res.json(newCalendar);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Por algun motivo no se pudo crear la tarea indicada" });
  }
};

//actualizar tarea del calendario
export const updateCalendar = async (req, res) => {
  try {
    const { id } = req.params;
    //aca le paso lo que yo quiero que actualice
    const { title, description, date, time } = req.body;
    //tenemos que buscarlo en este caso por id
    //aca estoy consultando y actualizando, ahora lo que tengo que hacer es guardarlo en la base de datos
    const calendar = await Calendar.findByPk(id);
    calendar.title = title;
    calendar.description = description;
    calendar.date = date;
    calendar.time = time;
    await calendar.save();

    res.json(calendar);

    res.json(calendar);
  } catch (error) {
    return res.status(500).json({ message: "No se pudo actualizar la tarea" });
  }
};

//borrar tarea
export const deleteCalendar = async (req, res) => {
  //cuando eliminamos un proyecto necesito un Id
  try {
    const { id } = req.params;
    await Calendar.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "No pudimos borrar lo solicitado" });
  }
};
