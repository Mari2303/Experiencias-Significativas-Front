import React, { useEffect, useState } from "react";
import { getEnum } from "../../Api/Services/Helper";
import { DataSelectRequest } from "../../Api/Types/HelperTypes";
import type { Experience } from "../../Api/Types/experienceTypes";

interface TematicaFormProps {
  value: Experience;
  onChange: (value: Experience) => void;
}

const TematicaForm: React.FC<TematicaFormProps> = ({ value, onChange }) => {
  const handleInput =
    (field: keyof Experience) => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ ...value, [field]: e.target.value });
    };

  const [lineasTematicas, setLineasTematicas] = useState<DataSelectRequest[]>([]);
  const [tematicaFocus, setTematicaFocus] = useState(false);
  const [tematicaInput, setTematicaInput] = useState("");

  useEffect(() => {
    const fetchLineas = async () => {
      const lineas: DataSelectRequest[] = await getEnum("LineThematic");
      setLineasTematicas(lineas);
      console.log("LineThematic recibidos:", lineas);
    };
    fetchLineas();
  }, []);

  const handleLineaChange = (id: number) => {
    const ids = Array.isArray(value.thematicLineIds) ? value.thematicLineIds : [];
    if (ids.includes(id)) {
      onChange({ ...value, thematicLineIds: ids.filter((lid) => lid !== id) });
    } else {
      onChange({ ...value, thematicLineIds: [...ids, id] });
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">TEMÁTICA Y DESARROLLO</h2>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="col-span-2 w-99">
          <label className="block mb-2 font-medium">
            Temática de la experiencia significativa
          </label>
          <div className="relative">
            <input
              type="text"
              value={tematicaInput}
              onChange={(e) => {
                setTematicaFocus(true);
                setTematicaInput(e.target.value);
              }}
              onFocus={() => setTematicaFocus(true)}
              onBlur={() => setTimeout(() => setTematicaFocus(false), 100)}
              className="border rounded p-2 w-full"
              placeholder="Seleccione o escriba..."
              autoComplete="off"
              aria-label="Buscar línea temática"
            />
            {tematicaFocus && (
              <ul className="absolute left-0 z-10 bg-white border border-gray-300 rounded-md w-full mt-1 max-h-40 overflow-y-auto shadow-lg">
                {(tematicaInput
                  ? lineasTematicas.filter((opt) =>
                      opt.displayText
                        .toLowerCase()
                        .includes(tematicaInput.toLowerCase())
                    )
                  : lineasTematicas
                ).map((opt) => (
                  <li
                    key={opt.id}
                    className="px-3 py-2 cursor-pointer hover:bg-indigo-100"
                    onMouseDown={() => {
                      const ids = Array.isArray(value.thematicLineIds)
                        ? value.thematicLineIds
                        : [];
                      if (!ids.includes(Number(opt.id))) {
                        onChange({
                          ...value,
                          thematicLineIds: [...ids, Number(opt.id)],
                        });
                        setTematicaInput("");
                        setTematicaFocus(false);
                      }
                    }}
                  >
                    {opt.displayText}
                  </li>
                ))}
                {tematicaInput &&
                  lineasTematicas.filter((opt) =>
                    opt.displayText
                      .toLowerCase()
                      .includes(tematicaInput.toLowerCase())
                  ).length === 0 && (
                    <li className="px-3 py-2 text-gray-400">Sin coincidencias</li>
                  )}
              </ul>
            )}

            {/* Mostrar etiquetas seleccionadas */}
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.isArray(value.thematicLineIds) &&
                value.thematicLineIds.length > 0 &&
                lineasTematicas
                  .filter((opt) => value.thematicLineIds.includes(Number(opt.id)))
                  .map((opt) => (
                    <span
                      key={opt.id}
                      className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded flex items-center"
                    >
                      {opt.displayText}
                      <button
                        type="button"
                        aria-label={`Quitar ${opt.displayText}`}
                        className="ml-2 text-red-500 hover:text-red-700"
                        onClick={() => {
                          const ids = value.thematicLineIds.filter(
                            (id) => id !== Number(opt.id)
                          );
                          onChange({ ...value, thematicLineIds: ids });
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
            </div>
          </div>
        </div>
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Estrategias pedagógicas"
          value={value.pedagogicalStrategies || ""}
          onChange={handleInput("pedagogicalStrategies")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Articulación y proyectos transversales"
          value={value.coordinationTransversalProjects || ""}
          maxLength={10}
          onChange={handleInput("coordinationTransversalProjects")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Cobertura"
          value={value.coverage || ""}
          onChange={handleInput("coverage")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Poblaciones"
          value={value.population || ""}
          onChange={handleInput("population")}
        />
        <input
          className="border rounded p-2 w-full"
          type="text"
          placeholder="Experiencias de Pandemia Covid 19"
          value={value.experiencesCovidPandemic || ""}
          onChange={handleInput("experiencesCovidPandemic")}
        />
      </div>
    </div>
  );
};

export default TematicaForm;
