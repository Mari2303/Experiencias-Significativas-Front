
const TiempoForm = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">TIEMPO DE DESARROLLO DE LA EXPERIENCIA</h2>

      <div className="mb-4">
        <label>Fecha de Inicio</label>
        <input type="date" className="block border rounded p-2 mt-1" />
      </div>

      <div className="mb-4">
        <label>Duración</label>
        <div className="flex gap-2 mt-1">
          <input placeholder="Días" className="border rounded p-1 w-20" />
          <input placeholder="Meses" className="border rounded p-1 w-20" />
          <input placeholder="Años" className="border rounded p-1 w-20" />
        </div>
      </div>

      <div className="mb-4">
        <p>¿La experiencia ha tenido algún reconocimiento?</p>
        <label className="mr-4">
          <input type="radio" name="reconocimiento" className="mr-1" /> Sí
        </label>
        <label>
          <input type="radio" name="reconocimiento" className="mr-1" /> No
        </label>
      </div>

      <textarea
        placeholder="Producciones, publicaciones y socialización de la experiencia..."
        className="w-full border rounded p-2"
        rows={3}
      />
    </div>
  );
};

export default TiempoForm;
