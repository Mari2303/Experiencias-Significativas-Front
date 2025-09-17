import React, { useEffect } from "react";
import { Lider } from "../../Api/Types/experienceTypes";

interface LideresFormProps {
  lideres: Lider[];
  setLideres: (lideres: Lider[]) => void;
}

const LideresForm: React.FC<LideresFormProps> = ({ lideres, setLideres }) => {
  useEffect(() => {
    // Autocompletar datos de la persona al montar el componente
    const person = JSON.parse(localStorage.getItem("person") || "{}");
    if (person && (person.nombre || person.documento || person.correo)) {
      setLideres([
        {
          nombre: person.nombre || "",
          documento: person.documento || "",
          correo: person.correo || "",
          cargo: person.cargo || "",
          telefono: person.telefono || ""
        }
      ]);
    }
  }, [setLideres]);

  const handleChange = (index: number, field: keyof Lider, value: string) => {
    const nuevosLideres = [...lideres];
    nuevosLideres[index][field] = value;
    setLideres(nuevosLideres);
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">DATOS DEL LÍDER (ES) DE LA EXPERIENCIA SIGNIFICATIVA</h2>
      <div className="grid grid-cols-2 gap-6">
        {lideres.map((lider, i) => (
          <div key={i}>
            <p className="text-[#00aaff] font-semibold">Líder/Autor</p>
            <input
              placeholder="Nombre(s) y apellido(s)"
              className="w-full border rounded p-2 mt-1"
              value={lider.nombre}
              onChange={e => handleChange(i, "nombre", e.target.value)}
            />
            <input
              placeholder="Documento de identidad"
              className="w-full border rounded p-2 mt-2"
              value={lider.documento}
              onChange={e => handleChange(i, "documento", e.target.value)}
            />
            <input
              placeholder="Correo electrónico"
              className="w-full border rounded p-2 mt-2"
              value={lider.correo}
              onChange={e => handleChange(i, "correo", e.target.value)}
            />
            <input
              placeholder="Cargo"
              className="w-full border rounded p-2 mt-2"
              value={lider.cargo}
              onChange={e => handleChange(i, "cargo", e.target.value)}
            />
            <input
              placeholder="Teléfono"
              className="w-full border rounded p-2 mt-2"
              value={lider.telefono}
              onChange={e => handleChange(i, "telefono", e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LideresForm;
