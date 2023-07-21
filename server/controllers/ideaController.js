import Idea from "../models/ideamodel.js";
import { StatusCodes } from "http-status-codes";

export const createIdea = async (req, res) => {
  const { title, description, phone, email } = req.body;

  const new_idea = await Idea.create({
    title,
    description,
    phone,
    email,
  });

  res.status(StatusCodes.CREATED).json({ data: new_idea });
};

export const fetchIdeas = async (req, res) => {
  const ideas = await Idea.find();

  res.status(StatusCodes.OK).json({ data: ideas });
};
