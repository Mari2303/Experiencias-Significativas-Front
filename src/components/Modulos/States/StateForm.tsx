import React, { useState, useEffect } from "react";
import { IState, addState, updateState } from "../Services/State";

interface StateFormProps {
  editing: IState | null;
  setEditing: (state: IState | null) => void;
  refresh: () => void;
}

export default function StateForm({ editing, setEditing, refresh }: StateFormProps) {
  const [formData, setFormData] = useState<Omit<IState, "id">>({
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
      updateState(editing.id, formData);
      alert("Estado actualizado con éxito");
    } else {
      addState(formData);
      alert("Estado agregado con éxito");
    }

    setFormData({ nombre: "", codigo: "", activo: true });
    setEditing(null);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h3 className="font-bold mb-2">
        {editing ? "Editar Estado" : "Agregar Estado"}
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
