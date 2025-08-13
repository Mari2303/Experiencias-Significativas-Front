import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

interface ExperienciasProps {
  onAgregar: () => void;
}

const Experiencias = ({ onAgregar }: ExperienciasProps) => {
  const [showModal, setShowModal] = useState(false);

  const experiencias = [
    { id: 1, titulo: "Visitar Experiencia" },
    { id: 2, titulo: "Visitar Experiencia" },
    { id: 3, titulo: "Visitar Experiencia" },
    { id: 4, titulo: "Visitar Experiencia" },
  ];

  const nuevas = [1, 2, 3];

  const handleVisitarClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-xl font-bold text-sky-600 mb-4">
        Actualizar Experiencia
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {experiencias.map((exp) => (
          <div
            key={exp.id}
            className="border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition duration-200 cursor-pointer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Google_Material_Icons.svg/1200px-Google_Material_Icons.svg.png"
              alt="icono"
              className="w-12 h-12 mb-4"
            />
            <button
              onClick={handleVisitarClick}
              className="bg-gray-100 px-4 py-1 rounded-md text-sm hover:bg-gray-200"
            >
              {exp.titulo}
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-sky-600 mb-4">
        Registro de Experiencias Nuevas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {nuevas.map((n) => (
          <div
            key={n}
            onClick={onAgregar}
            className="border-2 border-dashed border-sky-200 bg-sky-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-sky-100 transition"
          >
            <div className="bg-gray-100 rounded-full p-3 mb-2">
              <span className="text-sky-500 text-2xl font-bold">+</span>
            </div>
            <p className="text-sm text-gray-600">Agregar Nueva Experiencia</p>
          </div>
        ))}
      </div>

      {/* Modal con el formulario */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-sky-600 fw-bold">
            Información de la Experiencia
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título de la experiencia</Form.Label>
              <Form.Control placeholder="Ingrese el título de la experiencia" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre del establecimiento educativo</Form.Label>
              <Form.Control placeholder="Ingrese el nombre del establecimiento" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre completo del líder</Form.Label>
              <Form.Control placeholder="Ingrese el nombre completo del líder" />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Label>Departamento</Form.Label>
                <Form.Control placeholder="Ingrese el departamento" />
              </Col>
              <Col>
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>Municipio</Form.Label>
                <Form.Control placeholder="Ingrese el municipio" />
              </Col>
              <Col>
                <Form.Label>Criterios evaluados</Form.Label>
                <Form.Select>
                  <option>Seleccione los criterios</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>Código DANE</Form.Label>
                <Form.Control placeholder="Ingrese el código DANE" />
              </Col>
              <Col>
                <Form.Label>Tipo de experiencia</Form.Label>
                <Form.Select>
                  <option>Seleccione el tipo</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Ingrese la descripción de la experiencia" />
              </Col>
              <Col>
                <Form.Label>Estado actual</Form.Label>
                <Form.Control placeholder="Ingrese el estado actual" />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Listo</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Experiencias;
