import express, { Request, Response } from "express";
import apiRouter from "./routes/api-router";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get("/health", (_req, res) => res.status(200).send("Server online..."));

// use api router
app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
