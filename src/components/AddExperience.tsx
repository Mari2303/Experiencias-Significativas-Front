import React, { useState } from "react";
import { createExperience } from "../Api/Services/createExperience";
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
import PDFUploader from "./Experience/PDF";


interface AddExperienceProps {
  onVolver: () => void;
}



const AddExperience: React.FC<AddExperienceProps> = ({ onVolver }) => {
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
    testsKnow: "",
    codeDane: "" // Added missing property
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

  // Validación de campos obligatorios
  const validateForm = () => {
    const errors = [];
    if (!formData.nameExperiences) errors.push('El título de la experiencia es obligatorio');
    if (!formData.code) errors.push('El código es obligatorio');
    if (!lideres[0]?.nombre) errors.push('El nombre del líder es obligatorio');
    if (!lideres[0]?.documento) errors.push('El documento del líder es obligatorio');
    if (!lideres[0]?.correo) errors.push('El correo del líder es obligatorio');
    if (!lideres[0]?.cargo) errors.push('El cargo del líder es obligatorio');
    if (!lideres[0]?.telefono) errors.push('El teléfono del líder es obligatorio');
    if (!identificacionInstitucional.name) errors.push('El nombre de la institución es obligatorio');
    if (!identificacionInstitucional.codeDane) errors.push('El código DANE es obligatorio');
    if (!formData.developmenttime) errors.push('La fecha de desarrollo es obligatoria');
    if (!formData.stateId) errors.push('El estado es obligatorio');
    if (!pdfFile) errors.push('Debes adjuntar un PDF');
    // Puedes agregar más validaciones según tu modelo
    return errors;
  };

  // Función handleSubmit para enviar el registro a la API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
    const experiencia: any = {
      ...formData,
      institution: identificacionInstitucional,
      lideres,
      tematicaForm,
      nivelesForm,
      grupoPoblacional,
      tiempo,
      componentes,
      seguimientoEvaluacion,
      informacionApoyo,
      documents: pdfFile ? [{ name: pdfFile.name, urlPdf: '', urlLink: '' }] : [],
    };
    try {
      // Consumir el endpoint correcto
      const res = await fetch('/api/Experience/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(experiencia),
      });
      if (!res.ok) throw new Error('Error al registrar la experiencia');
      alert('Experiencia registrada correctamente');
      onVolver();
    } catch (err) {
      alert('Error al registrar la experiencia');
    }
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

  // Estado para PDF
  const [pdfFile, setPdfFile] = useState<File | null>(null);

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

        {/* PDF Uploader */}
        <div className="my-6">
          <PDFUploader onFileSelect={setPdfFile} />
          {pdfFile && (
            <div className="mt-2 text-center">
              <span className="font-semibold">PDF seleccionado:</span> {pdfFile.name}
            </div>
          )}
        </div>


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

export default AddExperience;
