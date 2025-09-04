
const Evaluacion = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-2">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold text-center mb-1">Formulario de Evaluación</h2>
        <p className="text-center text-gray-500 mb-6">
          Sección de Evaluación de la Experiencia Significativa
        </p>

        {/* Información General */}
        <section className="space-y-4 border rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-lg mb-4">Información General</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Ingrese el nombre de la experiencia"
              className="border rounded p-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Ingrese el nombre del evaluador"
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              className="border rounded p-2 w-full"
              required
            />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Evaluación Inicial
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Evaluación Final
              </label>
            </div>
          </div>
        </section>

        {/* Criterios de Evaluación */}
        <section className="border rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-4">Criterios de Evaluación</h3>

          {[
            {
              titulo: "Pertinencia",
              desc: "Relación de la experiencia con su contexto y necesidades identificadas.",
            },
            {
              titulo: "Fundamentación",
              desc: "Relación con el PEI/PEC, planes institucionales, y sustentos teóricos/metodológicos.",
            },
            {
              titulo: "Innovación",
              desc: "Grado de novedad en métodos, materiales, tecnologías y estrategias.",
            },
            {
              titulo: "Resultados",
              desc: "Logros frente a objetivos, impacto en necesidades o problemáticas.",
            },
          ].map((criterio, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium">{criterio.titulo}</p>
              <p className="text-sm text-gray-500">{criterio.desc}</p>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-1">
                  <input type="checkbox" /> Naciente
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" /> Creciente
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" /> Inspiradora
                </label>
              </div>
              {index < 3 && <hr className="my-3" />}
            </div>
          ))}
        </section>

        {/* Botón */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Enviar Evaluación
          </button>
        </div>
      </div>
    </div>
  );
};

export default Evaluacion;
