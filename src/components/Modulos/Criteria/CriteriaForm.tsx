import React, { useState, useEffect } from "react";
import { addCriteria, Criteria, updateCriteria } from "../../../Api/Services/Criteria";


interface Props {
  editing: Criteria | null;
  setEditing: (Criteria: Criteria | null) => void;
  refresh: () => void;
}

export default function CriteriaForm({ editing, setEditing, refresh }: Props) {
  const [formData, setFormData] = useState<Omit<Criteria, "id">>({
    name: "",
    code: "",
    state: true,
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
    if (!formData.name || !formData.code) {
      alert("Nombre y código son requeridos");
      return;
    }

    if (editing) {
      updateCriteria(editing.id, formData);
      alert("Criterio actualizado con éxito");
    } else {
      addCriteria(formData);
      alert("Criterio agregado con éxito");
    }

    setFormData({ name: "", code: "", state: true });
    setEditing(null);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h3 className="font-bold mb-2">
        {editing ? "Editar Criterio" : "Agregar Criterio"}
      </h3>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        name="code"
        placeholder="Código"
        value={formData.code}
        onChange={handleChange}
        className="border p-2 mr-2"
      />
      <label className="mr-2">
        <input
          type="checkbox"
          name="state"
          checked={formData.state}
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
