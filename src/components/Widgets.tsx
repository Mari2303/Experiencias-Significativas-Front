// src/components/Widgets.tsx
import React from "react";

const Widgets: React.FC = () => {
  return (
    <div>
      <div className="font-bold text-[#00aaff] text-[28.242px] w-full">
          <p>Ejes temáticos</p>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Widget 1 */}
      <div className="bg-white p-9 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/EducacionAmbiental.png" alt="" className="mx-auto mb-2 w-15" />
          Educación Ambiental
        </h6>
      </div>

      <div className="bg-white p-9 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/Ciencia.png" alt="" className="mx-auto mb-2 w-20 " />
          Ciencia y Tecnología
        </h6>
      </div>

      <div className="bg-white p-7 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/books.png" alt="" className="mx-auto mb-2 w-15" />
          Interculturalidad Bilingüismo
        </h6>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/Arte.png" alt="" className="mx-auto mb-2 w-20" />
          Arte, Cultura y Patrimonio
        </h6>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/Habilidades.png" alt="" className="mx-auto mb-2 w-15" />
          Habilidades Comunicativas
        </h6>
      </div>

      <div className="bg-white p-10 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/Acádemica.png" alt="" className="mx-auto mb-2 w-15" />
          Acádemica Curricular
        </h6>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/inclusion.png" alt="" className="mx-auto mb-2 w-15" />
          Inclusión Diversidad
        </h6>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/convivencia.png" alt="" className="mx-auto mb-2 w-15" />
          Convivencia Escolar (Ciencias Sociales y Políticas)
        </h6>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-70 h-35 text-center">
        <h6 className="text-lg font-semibold text-gray-800">
          <img src="/images/deporte.png" alt="" className="mx-auto mb-2 w-20" />
          Danza, Deporte y Recreación
        </h6>
      </div>
      </div>
      <div className="mt-10 font-bold text-[#00aaff] text-[28.359px] w-full">
        <p>Experiencias</p>
      </div>
    </div>
  );
};

export default Widgets;
