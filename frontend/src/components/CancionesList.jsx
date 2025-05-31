import CancionItem from "./CancionItem";

export default function CancionesList({ canciones, actualizar }) {
  return (
    <ul className="list-group bg-dark rounded shadow-sm">
      {canciones.map((c) => (
        <CancionItem
          key={c.id}
          cancion={c}
          actualizar={actualizar}
          className="list-group-item bg-secondary text-white border-0 mb-2 rounded"
        />
      ))}
    </ul>
  );
}