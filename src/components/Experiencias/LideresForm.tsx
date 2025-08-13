import React from "react";

const LideresForm = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">DATOS DEL LÍDER (ES) DE LA EXPERIENCIA SIGNIFICATIVA</h2>

      <div className="grid grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i}>
            <a href="#" className="text-sky-600 font-semibold">Líder/Autor</a>
            <input placeholder="Nombre(s) y apellido(s)" className="w-full border rounded p-2 mt-1" />
            <input placeholder="Documento de identidad" className="w-full border rounded p-2 mt-2" />
            <input placeholder="Correo electrónico" className="w-full border rounded p-2 mt-2" />
            <input placeholder="Cargo" className="w-full border rounded p-2 mt-2" />
            <input placeholder="Teléfono" className="w-full border rounded p-2 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LideresForm;
