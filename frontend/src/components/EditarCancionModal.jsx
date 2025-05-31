import { useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const API = `http://localhost:${import.meta.env.VITE_API_PORT}/canciones`;

export default function EditarCancionModal({ cancion, actualizar }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    titulo: cancion.titulo,
    artista: cancion.artista,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/${cancion.id}`, form);
      actualizar();
      handleClose();
    } catch (error) {
      console.error("Error al actualizar canción:", error);
    }
  };

  return (
    <>
      <Button
        variant="warning"
        size="sm"
        onClick={handleShow}
        className="me-2"
        style={{ fontWeight: "600" }}
      >
        ✏️ Editar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName="bg-dark text-white border-secondary"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="fw-bold">Editar Canción</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
                required
                className="bg-secondary text-white border-0"
                style={{ boxShadow: "none" }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Artista</Form.Label>
              <Form.Control
                type="text"
                name="artista"
                value={form.artista}
                onChange={handleChange}
                required
                className="bg-secondary text-white border-0"
                style={{ boxShadow: "none" }}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="warning" type="submit" className="fw-semibold">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
