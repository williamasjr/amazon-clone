import express, { Request, Response } from "express";
import apiRouter from "./routes/api-router";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/health", (_req, res) => res.status(200).send("Server online..."));

app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
