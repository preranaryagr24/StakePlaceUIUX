import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import userRoutes from "./routes/userRoutes.js";
import ideaRoutes from "./routes/ideaRotes.js";

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
mongoose.set("strictQuery", true);

const baseUrl = `/api/v1`;

app.use(`${baseUrl}/user`, userRoutes);
app.use(`${baseUrl}/idea`, ideaRoutes);

app.get("/", (req, res) => {
  res.send("Hello from mini project");
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(port, () => console.log(`Connected to server ${port}`))
  )
  .catch((error) => console.log(error));
