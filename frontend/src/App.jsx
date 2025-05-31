import { useEffect, useState } from "react";
import axios from "axios";
import CancionForm from "./components/CancionForm";
import CancionesList from "./components/CancionesList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

function App() {
  const [canciones, setCanciones] = useState([]);

  const getCanciones = async () => {
    try {
      console.log("Cargando canciones...");
      const res = await axios.get(API);
      const data = res.data;
      console.log("Canciones cargadas:", data);
      setCanciones(data);
    } catch (error) {
      console.error("Error al cargar canciones:", error);
    }
  };

  useEffect(() => {
    getCanciones();
  }, []);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center bg-dark text-white"
        style={{
          width: "100vw",
          minHeight: "100vh",
          padding: "2rem 1rem 6rem", // espacio abajo para footer
          overflowX: "hidden",
        }}
      >
        <header className="mb-5 text-center">
          <h1 className="display-3 fw-bold mb-1">E-Sueño</h1>
          <h2 className="h4">🎤 Mi Repertorio</h2>
          <p className="lead text-muted">
            Administra tus canciones favoritas fácilmente
          </p>
        </header>

        <div className="w-100" style={{ maxWidth: 700 }}>
          <div className="card bg-secondary bg-gradient text-white shadow-lg mb-5 rounded-4">
            <div className="card-body">
              <h3 className="h5 mb-4 fw-semibold">Agregar nueva canción</h3>
              <CancionForm actualizar={getCanciones} />
            </div>
          </div>

          <section>
            <h3 className="h4 mb-4 text-center fw-semibold">Lista de canciones</h3>
            {canciones.length === 0 ? (
              <div className="alert alert-info text-center">
                No hay canciones aún.
              </div>
            ) : (
              <CancionesList canciones={canciones} actualizar={getCanciones} />
            )}
          </section>
        </div>
      </div>

      <footer
        className="bg-dark text-center text-white-50 py-3 position-fixed bottom-0 start-0 w-100 border-top border-secondary"
        style={{ zIndex: 1000 }}
      >
        &copy; 2025 E-Sueño. Todos los derechos reservados.
      </footer>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
