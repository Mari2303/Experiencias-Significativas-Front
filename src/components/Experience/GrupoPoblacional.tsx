import React from "react";
import type { Experience } from "../../Api/Types/experienceTypes";

interface GrupoPoblacionalFormProps {
  value: Experience["populationGradeIds"];
  onChange: (val: Experience["populationGradeIds"]) => void;
  // opcional: permitir pasar opciones reales desde el padre
  options?: { id: number; nombre: string }[];
}

// Si no recibes opciones desde el servidor, usa estos IDs por defecto.
// **Importante**: reemplaza estos ids por los reales que tengas en la DB.
const defaultGrupos = [
  { id: 1, nombre: "Indígenas" },
  { id: 2, nombre: "Mestizos" },
  { id: 3, nombre: "Pequeños productores" },
  { id: 4, nombre: "Rom" },
  { id: 5, nombre: "Afrocolombianos" },
  { id: 6, nombre: "Palenqueros" },
  { id: 7, nombre: "Raizales" }
];

const GrupoPoblacionalForm: React.FC<GrupoPoblacionalFormProps> = ({
  value,
  onChange,
  options
}) => {
  const selected = value ?? [];
  const grupos = options ?? defaultGrupos;

  const toggle = (id: number, checked: boolean) => {
    let newValue: number[];
    if (checked) {
      newValue = Array.from(new Set([...selected, id])); // evita duplicados
    } else {
      newValue = selected.filter((x) => x !== id);
    }
    onChange(newValue);
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">GRUPO POBLACIONAL</h2>
      <div className="grid grid-cols-3 gap-2">
        {grupos.map((grupo) => (
          <label key={grupo.id} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-2"
              checked={selected.includes(grupo.id)}
              onChange={(e) => toggle(grupo.id, e.target.checked)}
              aria-checked={selected.includes(grupo.id)}
              aria-label={grupo.nombre}
            />
            {grupo.nombre}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GrupoPoblacionalForm;

