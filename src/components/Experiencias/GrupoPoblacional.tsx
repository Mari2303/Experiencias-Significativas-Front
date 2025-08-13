import React from "react";

const GrupoPoblacionalForm = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">GRUPO POBLACIONAL</h2>

      <div className="grid grid-cols-3 gap-2">
        {[
          "Indígenas", "Mestizos", "Pequeños productores", "Rom",
          "Afrocolombianos", "Palenqueros", "Raizales"
        ].map((grupo) => (
          <label key={grupo} className="flex items-center">
            <input type="checkbox" className="mr-2" /> {grupo}
          </label>
        ))}
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" /> Otro(s)
          <input placeholder="¿Cuál?" className="ml-2 border rounded p-1 w-24" />
        </label>
      </div>
    </div>
  );
};

export default GrupoPoblacionalForm;
