
const TematicaForm = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">TEMÁTICA Y DESARROLLO</h2>

      <div className="grid grid-cols-2 gap-4">
        {[
          "Temática de la experiencia significativa por áreas propuestas por la Secretaría de Educación",
          "Estrategias pedagógicas - Estándares - evaluación",
          "Articulación y proyectos transversales",
          "Cobertura",
          "Poblaciones",
          "Flexibilización Curricular por Pandemia - Experiencias de Pandemia Covid 19",
        ].map((label) => (
          <select key={label} className="border rounded p-2 w-full">
            <option>{label}</option>
          </select>
        ))}
      </div>
    </div>
  );
};

export default TematicaForm;
