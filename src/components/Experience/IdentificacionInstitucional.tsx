import React, { useState } from "react";
import { Institution } from "../../Api/Types/experienceTypes";


interface Props {
  value: Institution;
  onChange: (value: Institution) => void;
}

const person = JSON.parse(localStorage.getItem("person") || "{}");
const IdentificacionInstitucional: React.FC<Props> = ({ value, onChange }) => (
  <div className="border rounded-lg p-4 mb-6">
    <h2 className="font-semibold mb-4">IDENTIFICACIÓN INSTITUCIONAL</h2>

    <div className="space-y-4">
      {/* Fila 1 */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label>Nombre con que se conoce la experiencia</label>
          <input
            type="text"
            name="nombreExperiencia"
            value={value.name}
            onChange={e => onChange({ ...value, name: e.target.value })}
            required
            className="w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label>Nombre del establecimiento educativo</label>
          <input
            type="text"
            name="nombreEstablecimiento"
            value={value.name}
            onChange={e => onChange({ ...value, name: e.target.value })}
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
            name="codigoDane"
            value={person.CodeDane || ""}
            readOnly
            className="w-full border rounded p-2 mt-1 bg-gray-100"
          />
        </div>
        <div>
          <label>Nombre del rector (a) o director (a)</label>
          <input
            type="text"
            name="nameRector"
            value={value.nameRector}
            onChange={e => onChange({ ...value, nameRector: e.target.value })}
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
            name="municipio"
            value={value.municipality}
            onChange={e => onChange({ ...value, municipality: e.target.value })}
            required
            className="w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label>Departamento</label>
          <input
            type="text"
            name="departamento"
            value={value.departament}
            onChange={e => onChange({ ...value, departament: e.target.value })}
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
            name="zona"
            value={value.eZone}
            onChange={e => onChange({ ...value, eZone: e.target.value })}
            required
            className="w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={value.address}
            onChange={e => onChange({ ...value, address: e.target.value })}
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
          name="telefonos"
          value={value.phone}
          onChange={e => onChange({ ...value, phone: Number(e.target.value) })}
          required
          className="w-full border rounded p-2 mt-1"
        />
      </div>

      {/* Fila 6 */}
      <div>
        <label>Correos electrónicos institucionales</label>
        <input
          type="email"
          name="correos"
          value={value.emailInstitucional}
          onChange={e => onChange({ ...value, emailInstitucional: e.target.value })}
          required
          className="w-full border rounded p-2 mt-1"
        />
      </div>

      {/* Fila 7 */}
      <div>
        <label>Características del EE</label>
        <textarea
          rows={3}
          name="caracteristicas"
          value={value.caracteristic}
          onChange={e => onChange({ ...value, caracteristic: e.target.value })}
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
            name="entidadTerritorial"
            value={value.territorialEntity}
            onChange={e => onChange({ ...value, territorialEntity: e.target.value })}
            required
            className="w-full border rounded p-2 mt-1"
          />
        </div>
        <div>
          <p>¿Participará en el Evento Compartir de Saberes?</p>
          <div className="flex space-x-4 mt-1">
            <label>
              <input
                type="radio"
                name="participacion"
                value="si"
                checked={value.testsKnow === "si"}
                onChange={e => onChange({ ...value, testsKnow: e.target.value })}
                required
              />{" "}
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="participacion"
                value="no"
                checked={value.testsKnow === "no"}
                onChange={e => onChange({ ...value, testsKnow: e.target.value })}
                required
              />{" "}
              No
            </label>
          </div>
        </div>
      </div>
  </div>
  </div>
);

export default IdentificacionInstitucional;
