import { Router } from "express";
import {
  createBill,
  deleteBill,
  getBill,
  getBills,
  updateBill,
} from "../controllers/bills.controller.js";

const router = Router();

//Rutas
router.get("/bills", getBills);
router.get("/bills/:id", getBill);
router.post("/bills", createBill);
router.put("/bills/:id", updateBill);
router.delete("/bills/:id", deleteBill);

export default router;
