import React, { useState } from "react";
import CriteriaForm from "./CriteriaForm";
import CriteriaList from "./CriteriaList";
import { Criteria } from "../../../Api/Services/Criteria";

export default function CriteriaPage() {
  const [editing, setEditing] = useState<Criteria | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestión de Criterios</h2>
      <CriteriaForm editing={editing} setEditing={setEditing} refresh={refresh} />
      <CriteriaList
        setEditing={setEditing}
        refreshFlag={refreshFlag}
        refresh={refresh}
      />
    </div>
  );
}
