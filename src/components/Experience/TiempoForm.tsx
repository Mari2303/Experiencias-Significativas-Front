import React from "react";
import type { Experience } from "../../Api/Types/experienceTypes";

interface TiempoFormProps {
  value: Experience;
  onChange: (val: Experience) => void;
}

const TiempoForm: React.FC<TiempoFormProps> = ({ value, onChange }) => {
  // Convierte la fecha ISO a formato YYYY-MM-DD para el input date
  const formatDate = (isoDate?: string) => {
    if (!isoDate) return "";
    return isoDate.split("T")[0]; // ejemplo: "2025-09-19"
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">
        TIEMPO DE DESARROLLO DE LA EXPERIENCIA
      </h2>

      {/* 🔹 Fecha de inicio */}
      <div className="mb-4">
        <label>Fecha de Inicio</label>
        <input
          type="date"
          className="block border rounded p-2 mt-1"
          value={formatDate(value.developmenttime)}
          onChange={(e) =>
            onChange({
              ...value,
              developmenttime: e.target.value
                ? new Date(e.target.value).toISOString()
                : "",
            })
          }
        />
      </div>

      {/* 🔹 Duración (NO se guarda en developmenttime, sino en campos aparte) */}
      <div className="mb-4">
        <label>Duración</label>
        <div className="flex gap-2 mt-1">
          <input
            placeholder="Días"
            className="border rounded p-1 w-20"
            value={(value as any).durationDays || ""}
            onChange={(e) =>
              onChange({
                ...value,
                durationDays: e.target.value,
              } as any)
            }
          />
          <input
            placeholder="Meses"
            className="border rounded p-1 w-20"
            value={(value as any).durationMonths || ""}
            onChange={(e) =>
              onChange({
                ...value,
                durationMonths: e.target.value,
              } as any)
            }
          />
          <input
            placeholder="Años"
            className="border rounded p-1 w-20"
            value={(value as any).durationYears || ""}
            onChange={(e) =>
              onChange({
                ...value,
                durationYears: e.target.value,
              } as any)
            }
          />
        </div>
      </div>

      {/* 🔹 Reconocimiento */}
      <div className="mb-4">
        <p>¿La experiencia ha tenido algún reconocimiento?</p>
        <label className="mr-4">
          <input
            type="radio"
            name="reconocimiento"
            className="mr-1"
            checked={value.recognition === "Sí"}
            onChange={() => onChange({ ...value, recognition: "Sí" })}
          />{" "}
          Sí
        </label>
        <label>
          <input
            type="radio"
            name="reconocimiento"
            className="mr-1"
            checked={value.recognition === "No"}
            onChange={() => onChange({ ...value, recognition: "No" })}
          />{" "}
          No
        </label>
      </div>

      {/* 🔹 Socialización */}
      <textarea
        placeholder="Producciones, publicaciones y socialización de la experiencia..."
        className="w-full border rounded p-2"
        rows={3}
        value={value.socialization || ""}
        onChange={(e) => onChange({ ...value, socialization: e.target.value })}
      />
    </div>
  );
};

export default TiempoForm;

