import { Users } from "../models/Users.js";

//ruta para traerme todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "No se pudieron traer los datos" });
  }
};

//ruta para encontrar por id
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.findOne({
      where: {
        id,
      },
    });

    if (!users)
      return res
        .status(404)
        .json({ message: "El usuario que estas buscando no existe" });

    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "El usuario que estas buscando no existe" });
  }
};

//ruta para crear un usuario
export const createUser = async (req, res) => {
  const { username, name, lastname, password, email } = req.body;

  try {
    const newUser = await Users.create({
      username,
      name,
      lastname,
      password,
      email,
    });

    res.json(newUser);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Por algun motivo no se pudo crear el usuario" });
  }
};

//actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    //aca le paso lo que yo quiero que actualice
    const { username, name, lastname, password, email } = req.body;
    //tenemos que buscarlo en este caso por id
    //aca estoy consultando y actualizando, ahora lo que tengo que hacer es guardarlo en la base de datos
    const user = await Users.findByPk(id);
    user.username = username;
    user.name = name;
    user.lastname = lastname;
    user.password = password;
    user.email = email;
    await user.save();

    res.json(user);

    res.json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "No se pudo actualizar el usuario" });
  }
};

//borrar usuario
export const deleteUser = async (req, res) => {
  //cuando eliminamos un proyecto necesito un Id
  try {
    const { id } = req.params;
    await Users.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "No pudimos borrar lo solicitado" });
  }
};
