import React, { useState, useEffect } from "react";
import { addLineThematic, updateLineThematic, LineThematic } from "../Services/LineThematic";

interface Props {
  editing: LineThematic | null;
  setEditing: (LineThematic: LineThematic | null) => void;
  refresh: () => void;
}

export default function LineThematicForm({ editing, setEditing, refresh }: Props) {
  const [formData, setFormData] = useState<Omit<LineThematic, "id">>({
    nombre: "",
    codigo: "",
    activo: true,
  });

  useEffect(() => {
    if (editing) {
      const { id, ...rest } = editing;
      setFormData(rest);
    }
  }, [editing]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.codigo) {
      alert("Nombre y código son requeridos");
      return;
    }

    if (editing) {
      updateLineThematic(editing.id, formData);
      alert("Línea Temática actualizado con éxito");
    } else {
      addLineThematic(formData);
      alert("Línea Tem agregado con éxito");
    }

    setFormData({ nombre: "", codigo: "", activo: true });
    setEditing(null);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h3 className="font-bold mb-2">
        {editing ? "Editar Línea Temática" : "Agregar Línea Temática"}
      </h3>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        name="codigo"
        placeholder="Código"
        value={formData.codigo}
        onChange={handleChange}
        className="border p-2 mr-2"
      />
      <label className="mr-2">
        <input
          type="checkbox"
          name="activo"
          checked={formData.activo}
          onChange={handleChange}
        />{" "}
        Activo
      </label>
      <button
        type="submit"
        className="bg-sky-500 text-white px-4 py-2 rounded"
      >
        {editing ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
}
