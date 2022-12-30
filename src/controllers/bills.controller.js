import { Bills } from "../models/Bills.js";

//ruta para traerme todas las cuentas
export const getBills = async (req, res) => {
  try {
    const bills = await Bills.findAll();

    res.json(bills);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "No se pudieron traer las cuentas" });
  }
};

//ruta para encontrar por id
export const getBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bills = await Bills.findOne({
      where: {
        id,
      },
    });

    if (!bills)
      return res
        .status(404)
        .json({ message: "La cuenta que estas buscando no se encuentra" });

    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ruta para crear una cuenta nueva
export const createBill = async (req, res) => {
  const { title, date, amount } = req.body;

  try {
    const newBill = await Bills.create({
      title,
      date,
      amount,
    });

    // console.log(newTask);
    res.json(newBill);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Por algun motivo no se pudo crear la cuenta" });
  }
};

//actualizar tarea
export const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    //aca le paso lo que yo quiero que actualice
    const { title, date, amount } = req.body;
    //tenemos que buscarlo en este caso por id
    //aca estoy consultando y actualizando, ahora lo que tengo que hacer es guardarlo en la base de datos
    const bill = await Bills.findByPk(id);
    bill.title = title;
    bill.date = date;
    bill.amount = amount;
    await bill.save();

    res.json(bill);

    // console.log(task);
    // console.log(req.body);
    res.json(bill);
  } catch (error) {
    return res.status(500).json({ message: "No se pudo actualizar la cuenta" });
  }
};

//borrar cuenta
export const deleteBill = async (req, res) => {
  //cuando eliminamos un proyecto necesito un Id
  try {
    const { id } = req.params;
    await Bills.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "No pudimos borrar lo solicitado" });
  }
};
