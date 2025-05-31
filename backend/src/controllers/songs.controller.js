import path from "path";
import fs from "fs";
import { json } from "stream/consumers";
import { nanoid } from "nanoid";

const repertorioPath = path.resolve("repertorio.json");

const getSongs = async (req, res) => {
    const songs = JSON.parse(fs.readFileSync(repertorioPath, "utf-8"));
    res.json(songs);
    return;
}

const postSong = async (req, res) => {
  try {
    const { titulo, artista } = req.body;
    const songs = JSON.parse(fs.readFileSync(repertorioPath, "utf-8"));
    const nuevaCancion = { id: nanoid(), titulo, artista };
    songs.push(nuevaCancion);

    fs.writeFileSync(repertorioPath, JSON.stringify(songs, null, 2));

    res.status(201).json(nuevaCancion);
  } catch (error) {
    console.error("Error en postSong:", error);
    res.status(500).json({ error: "Error al agregar la canción", detalle: error.message });
  }
}


const putSong = async (req, res) => {
    try{
        const { id } = req.params;
        const { titulo, artista } = req.body;

        let songs = JSON.parse(fs.readFileSync(repertorioPath, "utf-8"));

        songs = songs.map((c) =>
            c.id === id ? { ...c, titulo, artista } : c
        );

        fs.writeFileSync(repertorioPath, JSON.stringify(songs));

        res.json({ mensaje: "Canción actualizada" });
        return;
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la canción" });
        return;
    }

}

const deleteSong = async (req, res) => {
    try{
        const { id } = req.params;
        let songs = JSON.parse(fs.readFileSync(repertorioPath, "utf-8"));

        const nuevasCanciones = songs.filter((c) => c.id !== id);
        fs.writeFileSync(repertorioPath, JSON.stringify(nuevasCanciones));

        res.json({ mensaje: "Canción eliminada" });
        return;
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la canción" });
        return;
    }

}

export {deleteSong, getSongs, postSong, putSong}