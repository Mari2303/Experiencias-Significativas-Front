import React from "react";

const IdentificacionInstitucional: React.FC = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">IDENTIFICACIÓN INSTITUCIONAL</h2>

      <form className="space-y-4">
        {/* Fila 1 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label>Nombre con que se conoce la experiencia</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label>Nombre del establecimiento educativo</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
        </div>

        {/* Fila 2 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label>Código DANE del establecimiento educativo</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label>Nombre del rector (a) o director (a)</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
        </div>

        {/* Fila 3 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label>Municipio / Ciudad</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label>Departamento</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
        </div>

        {/* Fila 4 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label>Zona del EE</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <label>Dirección</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
        </div>

        {/* Fila 5 */}
        <div>
          <label>Teléfonos de contacto</label>
          <input
            type="text"
            required
            className="w-full border rounded p-2 mt-1"
          />
        </div>

        {/* Fila 6 */}
        <div>
          <label>Correos electrónicos institucionales</label>
          <input
            type="email"
            required
            className="w-full border rounded p-2 mt-1"
          />
        </div>

        {/* Fila 7 */}
        <div>
          <label>Características del EE</label>
          <textarea
            rows={3}
            required
            placeholder="Describa en máximo cuatro líneas el establecimiento educativo..."
            className="w-full border rounded p-2 mt-1"
          />
        </div>

        {/* Fila 8 */}
        <div className="grid grid-cols-2 gap-6 items-center">
          <div>
            <label>Entidad Territorial Certificada (ETC)</label>
            <input
              type="text"
              required
              className="w-full border rounded p-2 mt-1"
            />
          </div>
          <div>
            <p>¿Participará en el Evento Compartir de Saberes?</p>
            <div className="flex space-x-4 mt-1">
              <label>
                <input type="radio" name="participacion" value="si" required /> Sí
              </label>
              <label>
                <input type="radio" name="participacion" value="no" required /> No
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IdentificacionInstitucional;
