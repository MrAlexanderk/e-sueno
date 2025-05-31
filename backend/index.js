import express from "express";
import cors from "cors";
import {getSongs, postSong, putSong, deleteSong} from "./src/controllers/songs.controller.js";
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/canciones", getSongs);

app.post("/canciones", postSong);

app.put("/canciones/:id", putSong);

app.delete("/canciones/:id", deleteSong);

app.listen(PORT, console.log(`Servidor corriendo en http://localhost:${PORT}`))

