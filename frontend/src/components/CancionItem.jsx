import axios from "axios";
import EditarCancionModal from "./EditarCancionModal";
import Button from "react-bootstrap/Button";

const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

export default function CancionItem({ cancion, actualizar }) {
  const eliminar = async () => {
    if (window.confirm(`¿Estás seguro de eliminar "${cancion.titulo}"?`)) {
      await axios.delete(`${API}/${cancion.id}`);
      actualizar();
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {cancion.titulo} - {cancion.artista}
      </span>
      <div>
        <EditarCancionModal cancion={cancion} actualizar={actualizar} />
        <Button variant="danger" size="sm" onClick={eliminar}>
          🗑️ Eliminar
        </Button>
      </div>
    </li>
  );
}