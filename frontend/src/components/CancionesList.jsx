import CancionItem from "./CancionItem";

export default function CancionesList({ canciones, actualizar }) {
  return (
    <ul className="list-group">
      {canciones.map((c) => (
        <CancionItem key={c.id} cancion={c} actualizar={actualizar} />
      ))}
    </ul>
  );
}
