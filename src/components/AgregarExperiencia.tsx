import React, { useState } from "react";
import { crearExperiencia } from "../Api/Services/crearExperiencia";
import LideresForm from "./Experience/LideresForm";
import IdentificacionForm from "./Experience/IdentificacionForm";
import TematicaForm from "./Experience/TematicaForm";
import GrupoPoblacionalForm from "./Experience/GrupoPoblacional";
import TiempoForm from "./Experience/TiempoForm";
import IdentificacionInstitucional from "./Experience/IdentificacionInstitucional";
import Componentes from "./Experience/Componentes";
import SeguimientoEvaluacion from "./Experience/SeguimientoEvaluacion";
import InformacionApoyoForm from "./Experience/InformacionApoyoForm";
import NivelesForm from "./Experience/NivelesForm";


interface AgregarExperienciaProps {
  onVolver: () => void;
}



const AgregarExperiencia: React.FC<AgregarExperienciaProps> = ({ onVolver }) => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nameExperiences: "",
    summary: "",
    methodologias: "",
    tranfer: "",
    code: "",
    developmenttime: "",
    recognition: "",
    socialization: "",
    themeExperienceArea: "",
    coordinationTransversalProjects: "",
    pedagogicalStrategies: "",
    coverage: "",
    experiencesCovidPandemic: "",
    userId: 0,
    institucionId: 0,
    stateId: 0,
    thematicLineIds: [],
    gradeIds: [],
    populationGradeIds: [],
    documents: [],
    objectives: [],
    historyExperiences: []
  });

  // Obtener datos de la persona desde localStorage y preparar el estado inicial de líderes
  const getInitialLideres = () => {
    const person = JSON.parse(localStorage.getItem("person") || "{}");
    const role = localStorage.getItem("role") || "";
    if (person && (person.FirstName || person.IdentificationNumber || person.Email)) {
      return [{
        nombre: `${person.FirstName || ""} ${person.SecondName || ""} ${person.FirstLastName || ""} ${person.SecondLastName || ""}`.replace(/\s+/g, " ").trim(),
        documento: person.IdentificationNumber || "",
        correo: person.Email || "",
        cargo: role,
        telefono: person.Phone || ""
      }];
    }
    return [{ nombre: "", documento: "", correo: "", cargo: "", telefono: "" }];
  };

  const [lideres, setLideres] = useState(getInitialLideres());

  // Estado para IdentificacionInstitucional
  const [identificacionInstitucional, setIdentificacionInstitucional] = useState({
    name: "",
    address: "",
    phone: 0,
    emailInstitucional: "",
    departament: "",
    commune: "",
    municipality: "",
    nameRector: "",
    eZone: "",
    caracteristic: "",
    territorialEntity: "",
    testsKnow: ""
  });

  // Estado para IdentificacionForm
  const [identificacionForm, setIdentificacionForm] = useState<{
    estado: string;
    ubicaciones: string[];
    otroTema: string;
  }>({
    estado: "",
    ubicaciones: [],
    otroTema: ""
  });

  // Función handleSubmit (vacía por ahora)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de envío aquí
  };
  const [tematicaForm, setTematicaForm] = useState({
    area: "",
    estrategias: "",
    articulacion: "",
    cobertura: "",
    poblaciones: "",
    pandemia: ""
  });

  // Estado para NivelesForm
  const [nivelesForm, setNivelesForm] = useState({
    niveles: {
      Primaria: { checked: false, grados: [] },
      Secundaria: { checked: false, grados: [] },
      Media: { checked: false, grados: [] },
      "Otro(s)": { checked: false, grados: [], otro: "" }
    }
  });

  // Estado para GrupoPoblacionalForm
  const [grupoPoblacional, setGrupoPoblacional] = useState<any>({});

  // Estado para TiempoForm
  const [tiempo, setTiempo] = useState<any>({});

  // Estado para Componentes
  const [componentes, setComponentes] = useState<any>({});

  // Estado para SeguimientoEvaluacion
  const [seguimientoEvaluacion, setSeguimientoEvaluacion] = useState<any>({});

  // Estado para InformacionApoyoForm
  const [informacionApoyo, setInformacionApoyo] = useState<any>({});

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow max-h-[80vh] overflow-y-auto">
      <button
        onClick={onVolver}
        className="mb-4 text-sky-600 hover:underline"
      >
        ← Volver
      </button>

      <form onSubmit={handleSubmit}>
        {/* Secciones como componentes */}
        <IdentificacionInstitucional
          value={identificacionInstitucional}
          onChange={setIdentificacionInstitucional}
        />
        <LideresForm
          lideres={lideres}
          setLideres={setLideres}
        />
        <IdentificacionForm
          value={identificacionForm}
          onChange={setIdentificacionForm}
        />
        <TematicaForm
          value={tematicaForm}
          onChange={setTematicaForm}
        />
        <NivelesForm
          value={nivelesForm}
          onChange={setNivelesForm}
        />
        <GrupoPoblacionalForm
          value={grupoPoblacional}
          onChange={setGrupoPoblacional}
        />
        <TiempoForm
          value={tiempo}
          onChange={setTiempo}
        />
        <Componentes
          value={componentes}
          onChange={setComponentes}
        />
        <SeguimientoEvaluacion
          value={seguimientoEvaluacion}
          onChange={setSeguimientoEvaluacion}
        />
        <InformacionApoyoForm
          value={informacionApoyo}
          onChange={setInformacionApoyo}
        />

        <input
          name="nameExperiences"
          value={formData.nameExperiences}
          onChange={handleChange}
          placeholder="Nombre de la experiencia"
        />
        <input
          type="text"
          name="address"
          value={identificacionInstitucional.address}
          onChange={e => setIdentificacionInstitucional({ ...identificacionInstitucional, address: e.target.value })}
          required
          className="w-full border rounded p-2 mt-1"
          placeholder="Dirección de la institución"
        />
        <input
          type="text"
          name="emailInstitucional"
          value={identificacionInstitucional.emailInstitucional}
          onChange={e => setIdentificacionInstitucional({ ...identificacionInstitucional, emailInstitucional: e.target.value })}
          className="w-full border rounded p-2 mt-1"
          placeholder="Correo institucional"
        />
        {/* Agrega aquí los demás campos según el DTO actualizado */}
        {/* Agrega aquí los demás campos según tu necesidad */}

        {/* Botón de enviar */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 "
          >
            Guardar Experiencia
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarExperiencia;
