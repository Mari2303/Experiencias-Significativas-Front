import React from "react";

const NivelesForm = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">NIVEL(ES), CICLO(S) Y GRADO(S) EN LOS QUE SE DESARROLLA LA EXPERIENCIA SIGNIFICATIVA</h2>

      {["Primaria", "Secundaria", "Media", "Otro(s)"].map((nivel) => (
        <div key={nivel} className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" /> {nivel}
          <input placeholder={nivel === "Otro(s)" ? "¿Cuál?" : "Grado(s)"} className="ml-2 border rounded p-1" />
        </div>
      ))}
    </div>
  );
};

export default NivelesForm;
