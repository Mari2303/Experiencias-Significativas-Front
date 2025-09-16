
import React from "react";

interface TiempoFormProps {
  value: any;
  onChange: (val: any) => void;
}

const TiempoForm: React.FC<TiempoFormProps> = ({ value, onChange }) => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">TIEMPO DE DESARROLLO DE LA EXPERIENCIA</h2>

      <div className="mb-4">
        <label>Fecha de Inicio</label>
        <input
          type="date"
          className="block border rounded p-2 mt-1"
          value={value.fechaInicio || ""}
          onChange={e => onChange({ ...value, fechaInicio: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label>Duración</label>
        <div className="flex gap-2 mt-1">
          <input
            placeholder="Días"
            className="border rounded p-1 w-20"
            value={value.dias || ""}
            onChange={e => onChange({ ...value, dias: e.target.value })}
          />
          <input
            placeholder="Meses"
            className="border rounded p-1 w-20"
            value={value.meses || ""}
            onChange={e => onChange({ ...value, meses: e.target.value })}
          />
          <input
            placeholder="Años"
            className="border rounded p-1 w-20"
            value={value.anios || ""}
            onChange={e => onChange({ ...value, anios: e.target.value })}
          />
        </div>
      </div>

      <div className="mb-4">
        <p>¿La experiencia ha tenido algún reconocimiento?</p>
        <label className="mr-4">
          <input
            type="radio"
            name="reconocimiento"
            className="mr-1"
            checked={value.reconocimiento === "Sí"}
            onChange={() => onChange({ ...value, reconocimiento: "Sí" })}
          /> Sí
        </label>
        <label>
          <input
            type="radio"
            name="reconocimiento"
            className="mr-1"
            checked={value.reconocimiento === "No"}
            onChange={() => onChange({ ...value, reconocimiento: "No" })}
          /> No
        </label>
      </div>

      <textarea
        placeholder="Producciones, publicaciones y socialización de la experiencia..."
        className="w-full border rounded p-2"
        rows={3}
        value={value.producciones || ""}
        onChange={e => onChange({ ...value, producciones: e.target.value })}
      />
    </div>
  );
};

export default TiempoForm;
