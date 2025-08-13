import React from "react";
import LideresForm from "./Experiencias/LideresForm";
import IdentificacionForm from "./Experiencias/IdentificacionForm";
import TematicaForm from "./Experiencias/TematicaForm";
import NivelesForm from "./Experiencias/NivelesForm";
import GrupoPoblacionalForm from "./Experiencias/GrupoPoblacional";
import TiempoForm from "./Experiencias/TiempoForm";
import IdentificacionInstitucional from "./Experiencias/IdentificacionInstitucional";
import Componentes from "./Experiencias/Componentes";
import SeguimientoEvaluacion from "./Experiencias/SeguimientoEvaluacion";
import InformacionApoyoForm from "./Experiencias/InformacionApoyoForm";

interface AgregarExperienciaProps {
  onVolver: () => void;
}

const AgregarExperiencia: React.FC<AgregarExperienciaProps> = ({ onVolver }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow max-h-[80vh] overflow-y-auto">
      <button
        onClick={onVolver}
        className="mb-4 text-sky-600 hover:underline"
      >
        ← Volver
      </button>

      {/* Secciones como componentes */}
      <IdentificacionInstitucional />
      <LideresForm />
      <IdentificacionForm />
      <TematicaForm />
      <NivelesForm />
      <GrupoPoblacionalForm />
      <TiempoForm />
      <Componentes />
      <SeguimientoEvaluacion />
      <InformacionApoyoForm />

      {/* Botón de enviar */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 "
        >
          Guardar Experiencia
        </button>
      </div>
    </div>
  );
};

export default AgregarExperiencia;
