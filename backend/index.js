import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";
import { nanoid } from "nanoid";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const json_path = "./repertorio.json";

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
