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
