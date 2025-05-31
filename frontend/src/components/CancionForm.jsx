import { useState } from "react";
import axios from "axios";

const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

export default function CancionForm({ actualizar }) {
  const [form, setForm] = useState({ titulo: "", artista: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API, form);
      console.log("Respuesta del servidor:", response.data);

      setForm({ titulo: "", artista: "" });
      actualizar();
    } catch (error) {
      console.error("Error al enviar canción:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        className="form-control mb-2"
        placeholder="Título"
        value={form.titulo}
        onChange={(e) => setForm({ ...form, titulo: e.target.value })}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Artista"
        value={form.artista}
        onChange={(e) => setForm({ ...form, artista: e.target.value })}
        required
      />
      <button className="btn btn-success">Agregar</button>
    </form>
  );
}
