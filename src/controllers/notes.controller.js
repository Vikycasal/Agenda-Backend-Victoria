import { Notes } from "../models/Notes.js";

//ruta para traerme todas las notas
export const getNotes = async (req, res) => {
  try {
    const notes = await Notes.findAll();

    res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: "No se pudieron traer las notas" });
  }
};

//ruta para encontrar por id
export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const notes = await Notes.findOne({
      where: {
        id,
      },
    });
    //si no encontras ninguna nota entonces devolveme este mensaje (sino te devuelve un error)
    if (!notes)
      return res
        .status(404)
        .json({ message: "La nota que estas buscando no existe" });

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "La nota que estas buscando no existe" });
  }
};

//ruta para crear una nota
export const createNote = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newNote = await Notes.create({
      title,
      description,
    });

    res.json(newNote);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Por algun motivo no se pudo crear la nota indicada" });
  }
};

//actualizar nota
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    //aca le paso lo que yo quiero que actualice
    const { title, description } = req.body;
    //tenemos que buscarlo en este caso por id
    //aca estoy consultando y actualizando, ahora lo que tengo que hacer es guardarlo en la base de datos
    const notes = await Notes.findByPk(id);
    notes.title = title;
    notes.description = description;
    await notes.save();

    res.json(notes);

    res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: "No se pudo actualizar la nota" });
  }
};

//borrar nota
export const deleteNotes = async (req, res) => {
  //cuando eliminamos un proyecto necesito un Id
  try {
    const { id } = req.params;
    await Notes.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "No pudimos borrar lo solicitado" });
  }
};
