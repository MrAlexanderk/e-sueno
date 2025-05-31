import { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

export default function EliminarCancionModal({ cancion, actualizar }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const eliminar = async () => {
    try {
      await axios.delete(`${API}/${cancion.id}`);
      actualizar();
      toast.success(
        `La canción "${cancion.titulo}" de ${cancion.artista} ha sido eliminada correctamente`
      );
      handleClose();
    } catch (error) {
      console.error("Error al eliminar canción:", error);
      toast.error("Error al eliminar la canción.");
    }
  };

  return (
    <>
      <Button
        variant="danger"
        size="sm"
        onClick={handleShow}
        style={{ fontWeight: "600" }}
      >
        🗑️ Eliminar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName="bg-dark text-white border-secondary"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="fw-bold">Confirmar Eliminación</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          ¿Estás seguro que deseas eliminar <strong>{cancion.titulo}</strong> de{" "}
          <em>{cancion.artista}</em>?
        </Modal.Body>

        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminar} className="fw-semibold">
            Sí, Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
