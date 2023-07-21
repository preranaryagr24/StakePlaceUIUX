import express from "express";
import { fetchIdeas, createIdea } from "../controllers/ideaController.js";

const router = express.Router();

router.get("/getIdeas", fetchIdeas);
router.post("/createIdea", createIdea);

export default router;
