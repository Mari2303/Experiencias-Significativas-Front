
const IdentificacionForm = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">IDENTIFICACIÓN DE LA EXPERIENCIA SIGNIFICATIVA</h2>

      <div className="mb-4">
        <p className="mb-2">Estado actual de la experiencia significativa</p>
        {["Naciente", "Creciente", "Inspiradora"].map((estado) => (
          <label key={estado} className="mr-4">
            <input type="radio" name="estado" className="mr-1" /> {estado}
          </label>
        ))}
      </div>

      <div>
        <p className="mb-2">Ubicación Temática</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            "Matemáticas", "Filosofía", "Física", "Química",
            "Humanidades, lengua castellana", "Ciencias naturales y educación ambiental",
            "Ciencias Sociales, historia, geografía, constitución política y democracia",
            "Ciencias económicas y política", "Educación artística y cultural",
            "Educación física, recreación y deportes", "Educación religiosa",
            "Educación ética y en valores humanos",
            "Idioma Extranjero (Inglés)", "Tecnología e informática", "Emprendimiento",
          ].map((tema) => (
            <label key={tema} className="flex items-center">
              <input type="checkbox" className="mr-2" /> {tema}
            </label>
          ))}
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Otro
            <input placeholder="¿Cuál?" className="ml-2 border rounded p-1 w-24" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default IdentificacionForm;
