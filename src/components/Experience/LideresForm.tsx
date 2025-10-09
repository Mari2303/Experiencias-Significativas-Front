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
              pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$"
              title="Solo se permiten letras y espacios"
               onChange={(e) => {
                const val = e.target.value.replace(/[^A-Za-z\s]/g, ""); 
                handleChange(i, "nameFirstLeader", val);
              }}
              required
            />

            <input
              placeholder="Documento de identidad"
              className="w-full border rounded p-2 mt-2"
              value={lider.firstIdentityDocument || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ""); // solo números
                if (val.length <= 10) {
                  handleChange(i, "firstIdentityDocument", val);
                }
              }}
              required
            />

            <input
              placeholder="Correo electrónico"
              className="w-full border rounded p-2 mt-2"
              value={lider.firdtEmail || ""}
              onChange={(e) => handleChange(i, "firdtEmail", e.target.value)}
              required
            />

            <input
              placeholder="Cargo"
              className="w-full border rounded p-2 mt-2"
              value={lider.firstPosition || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/[^A-Za-z\s]/g, "");
                handleChange(i, "firstPosition", val);
              }}
              required
            />

            <input
              placeholder="Teléfono"
              className="w-full border rounded p-2 mt-2"
              value={lider.firstPhone || ""}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ""); // solo números
                handleChange(i, "firstPhone", val);
              }}
              required
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LideresForm;

