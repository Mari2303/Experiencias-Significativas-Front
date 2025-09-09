import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ExperienciaModal from "./ExperienciaModal";

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
    <div className="p-8 min-h-screen">
      <div className="font-bold text-[#00aaff] text-[28.242px] ">
          <p>Actualizar Experiencia</p>
      </div>
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

      <div className="font-bold text-[#00aaff] text-[28.242px] w-full">
          <p>Registro de Nuevas Experiencias</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {nuevas.map((n) => (
          <div
            key={n}
            onClick={onAgregar}
            className="border-2 border-dashed border-sky-200 bg-sky-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-sky-100 transition"
          >
            <div className="bg-gray-100 rounded-xl p-3 mb-2">
              <span className="text-sky-500 text-2xl font-bold">+</span>
            </div>
            <p className="text-sm text-gray-600">Agregar Nueva Experiencia</p>
          </div>
        ))}
      </div>

  {/* Modal reutilizable */}
  <ExperienciaModal show={showModal} onClose={handleClose} />
    </div>
  );
};

export default Experiencias;
