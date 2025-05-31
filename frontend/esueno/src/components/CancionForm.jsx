import { useState } from "react";
const API = "http://localhost:3000/canciones";

export default function CancionForm({ actualizar }) {
  const [form, setForm] = useState({ titulo: "", artista: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ titulo: "", artista: "" });
    actualizar();
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
