import { useEffect, useState } from "react";
import CancionForm from "./components/CancionForm";
import CancionesList from "./components/CancionesList";

const API = "http://localhost:3000/canciones";

function App() {
  const [canciones, setCanciones] = useState([]);

  const getCanciones = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setCanciones(data);
  };

  useEffect(() => {
    getCanciones();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4">🎤 Mi Repertorio</h1>
      <CancionForm actualizar={getCanciones} />
      <CancionesList canciones={canciones} actualizar={getCanciones} />
    </div>
  );
}

export default App;
