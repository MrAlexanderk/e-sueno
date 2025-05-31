const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

export default function CancionItem({ cancion, actualizar }) {
  const eliminar = async () => {
    await fetch(`${API}/${cancion.id}`, { method: "DELETE" });
    actualizar();
  };

  const editar = async () => {
    const titulo = prompt("Nuevo título:", cancion.titulo);
    const artista = prompt("Nuevo artista:", cancion.artista);
    if (titulo && artista) {
      await fetch(`${API}/${cancion.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, artista }),
      });
      actualizar();
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {cancion.titulo} - {cancion.artista}
      </span>
      <div>
        <button className="btn btn-warning btn-sm me-2" onClick={editar}>
          ✏️
        </button>
        <button className="btn btn-danger btn-sm" onClick={eliminar}>
          🗑️
        </button>
      </div>
    </li>
  );
}
