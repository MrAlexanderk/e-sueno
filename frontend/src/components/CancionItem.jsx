import EditarCancionModal from "./EditarCancionModal";
import EliminarCancionModal from "./EliminarCancionModal";

export default function CancionItem({ cancion, actualizar }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-secondary text-white border-0 mb-2 rounded shadow-sm">
      <span className="fw-semibold">
        🎵 {cancion.titulo} <span className="text-muted">- {cancion.artista}</span>
      </span>
      <div>
        <EditarCancionModal cancion={cancion} actualizar={actualizar} />
        <EliminarCancionModal cancion={cancion} actualizar={actualizar} />
      </div>
    </li>
  );
}
