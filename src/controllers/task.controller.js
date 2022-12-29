//cuando me traigo el modelo lo que hago es decirle que me guarde los datos
//que estoy pidiendo en la base de datos
import { Task } from "../models/Task.js";

//ruta para traerme todas las tareas
export const getTasks = async (req, res) => {
  try {
    const task = await Task.findAll();
    // console.log(task);
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: "No se pudieron traer los datos" });
  }
};

//ruta para encontrar por id
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: {
        id,
      },
    });

    if (!task)
      return res
        .status(404)
        .json({ message: "La tarea que estas buscando no existe" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ruta para crear una tarea
export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const newTask = await Task.create({
      title,
      description,
      date,
    });

    // console.log(newTask);
    res.json(newTask);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Por algun motivo no se pudo crear la tarea indicada" });
  }
};

//actualizar tarea
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    //aca le paso lo que yo quiero que actualice
    const { title, description, date } = req.body;
    //tenemos que buscarlo en este caso por id
    //aca estoy consultando y actualizando, ahora lo que tengo que hacer es guardarlo en la base de datos
    const task = await Task.findByPk(id);
    task.title = title;
    task.description = description;
    task.date = date;
    await task.save();

    res.json(task);

    // console.log(task);
    // console.log(req.body);
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: "No se pudo actualizar la tarea" });
  }
};

//borrar tarea
export const deleteTask = async (req, res) => {
  //cuando eliminamos un proyecto necesito un Id
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "No pudimos borrar lo solicitado" });
  }
};
