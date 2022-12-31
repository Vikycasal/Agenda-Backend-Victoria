import { Router } from "express";
import {
  createNote,
  deleteNotes,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/notes.controller.js";

const router = Router();

//Rutas
router.get("/notes", getNotes);
router.get("/notes/:id", getNote);
router.post("/notes", createNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNotes);

export default router;
