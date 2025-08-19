// src/pages/PopulationGroupPage.tsx
import React, { useState } from "react";
import { PopulationGroup } from "../Services/PopulationGroup";
import PopulationGroupForm from "./PopulationGroupForm";
import PopulationGroupList from "./PopulationGroup.List";

export default function PopulationGroupPage() {
  const [editing, setEditing] = useState<PopulationGroup | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gestión de Grupos Poblacionales</h2>
      
      {/* Formulario */}
      <PopulationGroupForm
        editing={editing}
        setEditing={setEditing}
        refresh={refresh}
      />

      {/* Lista */}
      <PopulationGroupList
        setEditing={setEditing}
        refreshFlag={refreshFlag}
        refresh={refresh}
      />
    </div>
  );
}
