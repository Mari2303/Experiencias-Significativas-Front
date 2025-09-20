import React from "react";
import { Experience } from "../../Api/Types/experienceTypes";

interface LideresFormProps {
  value: Experience[];
  onChange: (lideres: Experience[]) => void;
}

const LideresForm: React.FC<LideresFormProps> = ({ value, onChange }) => {
  const handleChange = (index: number, field: keyof Experience, newValue: string) => {
    const nuevosLideres = [...value];
    (nuevosLideres[index][field] as any) = newValue;
    onChange(nuevosLideres);
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">
        DATOS DEL LÍDER (ES) DE LA EXPERIENCIA SIGNIFICATIVA
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {value.map((lider, i) => (
          <div key={i}>
            <p className="text-[#00aaff] font-semibold">Líder/Autor</p>

            <input
              placeholder="Nombre(s) y apellido(s)"
              className="w-full border rounded p-2 mt-1"
              value={lider.nameFirstLeader || ""}
              onChange={(e) =>
                handleChange(i, "nameFirstLeader", e.target.value)
              }
            />

            <input
              placeholder="Documento de identidad"
              className="w-full border rounded p-2 mt-2"
              value={lider.firstIdentityDocument || ""}
              onChange={(e) =>
                handleChange(i, "firstIdentityDocument", e.target.value)
              }
            />

            <input
              placeholder="Correo electrónico"
              className="w-full border rounded p-2 mt-2"
              value={lider.firdtEmail || ""}
              onChange={(e) => handleChange(i, "firdtEmail", e.target.value)}
            />

            <input
              placeholder="Cargo"
              className="w-full border rounded p-2 mt-2"
              value={lider.firstPosition || ""}
              onChange={(e) =>
                handleChange(i, "firstPosition", e.target.value)
              }
            />

            <input
              placeholder="Teléfono"
              className="w-full border rounded p-2 mt-2"
              value={lider.firstPhone || ""}
              onChange={(e) => handleChange(i, "firstPhone", e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LideresForm;

