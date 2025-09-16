
import React from "react";


interface NivelesFormProps {
  value: any;
  onChange: (val: any) => void;
}

const nivelesList = ["Primaria", "Secundaria", "Media", "Otro(s)"];

const NivelesForm: React.FC<NivelesFormProps> = ({ value, onChange }) => {
  const handleNivelCheck = (nivel: string, checked: boolean) => {
    const newValue = {
      ...value,
      niveles: {
        ...value.niveles,
        [nivel]: {
          ...value.niveles[nivel],
          checked
        }
      }
    };
    onChange(newValue);
  };

  const handleGradosChange = (nivel: string, grados: string) => {
    const newValue = {
      ...value,
      niveles: {
        ...value.niveles,
        [nivel]: {
          ...value.niveles[nivel],
          grados: grados.split(",")
        }
      }
    };
    onChange(newValue);
  };

  const handleOtroChange = (otro: string) => {
    const newValue = {
      ...value,
      niveles: {
        ...value.niveles,
        ["Otro(s)"]: {
          ...value.niveles["Otro(s)"],
          otro
        }
      }
    };
    onChange(newValue);
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">NIVEL(ES), CICLO(S) Y GRADO(S) EN LOS QUE SE DESARROLLA LA EXPERIENCIA SIGNIFICATIVA</h2>
      {nivelesList.map((nivel) => (
        <div key={nivel} className="flex items-center mb-2">
          <input
            type="checkbox"
            className="mr-2"
            checked={!!value.niveles[nivel]?.checked}
            onChange={e => handleNivelCheck(nivel, e.target.checked)}
          />
          {nivel}
          {nivel === "Otro(s)" ? (
            <input
              placeholder="¿Cuál?"
              className="ml-2 border rounded p-1"
              value={value.niveles[nivel]?.otro || ""}
              onChange={e => handleOtroChange(e.target.value)}
            />
          ) : (
            <input
              placeholder="Grado(s)"
              className="ml-2 border rounded p-1"
              value={value.niveles[nivel]?.grados?.join(",") || ""}
              onChange={e => handleGradosChange(nivel, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NivelesForm;
