import { useEffect, useState } from "react";
import axios from "axios";
import CancionForm from "./components/CancionForm";
import CancionesList from "./components/CancionesList";

const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

function App() {
  const [canciones, setCanciones] = useState([]);

  const getCanciones = async () => {
    console.log("Cargando canciones...");
    const res = await axios.get(API);
    const data = res.data;
    console.log("Canciones cargadas:", data);
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
