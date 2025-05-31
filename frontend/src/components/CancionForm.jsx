import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

export default function CancionForm({ actualizar }) {
  const [form, setForm] = useState({ titulo: "", artista: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API, form);
      console.log("Respuesta del servidor:", response.data);

      toast.success(
        `Se agregó la canción "${form.titulo}" de ${form.artista} correctamente`
      );

      setForm({ titulo: "", artista: "" });
      actualizar();
    } catch (error) {
      console.error("Error al enviar canción:", error);
      toast.error("Ocurrió un error al agregar la canción.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control mb-3 bg-secondary text-white border-0"
        placeholder="Título"
        value={form.titulo}
        onChange={(e) => setForm({ ...form, titulo: e.target.value })}
        required
        style={{ boxShadow: "none" }}
      />
      <input
        type="text"
        className="form-control mb-3 bg-secondary text-white border-0"
        placeholder="Artista"
        value={form.artista}
        onChange={(e) => setForm({ ...form, artista: e.target.value })}
        required
        style={{ boxShadow: "none" }}
      />
      <button type="submit" className="btn btn-success fw-semibold w-100">
        ➕ Agregar
      </button>
    </form>
  );
}
