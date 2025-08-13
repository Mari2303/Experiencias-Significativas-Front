// src/components/Modulo/forms/PopulationGroupForm.tsx
import React, { useState, useEffect } from "react";
import {
  addPopulationGroup,
  updatePopulationGroup,
  PopulationGroup,
} from "../Services/PopulationGroup";

interface Props {
  editing: PopulationGroup | null;
  setEditing: (group: PopulationGroup | null) => void;
  refresh: () => void;
}

export default function PopulationGroupForm({
  editing,
  setEditing,
  refresh,
}: Props) {
  const [formData, setFormData] = useState<Omit<PopulationGroup, "id">>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      updatePopulationGroup(editing.id, formData);
      alert("Grupo poblacional actualizado con éxito");
    } else {
      addPopulationGroup(formData);
      alert("Grupo poblacional agregado con éxito");
    }

    setFormData({ nombre: "", codigo: "", activo: true });
    setEditing(null);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h3 className="font-bold mb-2">
        {editing ? "Editar Grupo Poblacional" : "Agregar Grupo Poblacional"}
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
