// src/components/Modulo/pages/PopulationGroupPage.tsx
import React, { useState } from "react";
import PopulationGroupForm from "./PopulationGroupForm";
import { PopulationGroup } from "../Services/PopulationGroup";
import PopulationGroupList from "./PopulationGroup.List";

export default function PopulationGroupPage() {
  const [editing, setEditing] = useState<PopulationGroup | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Gestión de Grupos Poblacionales
      </h2>
      <PopulationGroupForm
        editing={editing}
        setEditing={setEditing}
        refresh={refresh}
      />
      <PopulationGroupList
        setEditing={setEditing}
        refreshFlag={refreshFlag}
        refresh={refresh}
      />
    </div>
  );
}
