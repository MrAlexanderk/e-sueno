import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";
import { nanoid } from "nanoid";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());


app.get("/api/repertorio", async (req, res) => {

})


