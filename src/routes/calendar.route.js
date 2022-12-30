import { Router } from "express";
import {
  createCalendar,
  deleteCalendar,
  getCalendar,
  getCalendars,
  updateCalendar,
} from "../controllers/calendar.controller.js";

const router = Router();

//Rutas
router.get("/calendar", getCalendars);
router.get("/calendar/:id", getCalendar);
router.post("/calendar", createCalendar);
router.put("/calendar/:id", updateCalendar);
router.delete("/calendar/:id", deleteCalendar);

export default router;
