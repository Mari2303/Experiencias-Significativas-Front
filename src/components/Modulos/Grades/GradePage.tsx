import { useState } from "react";
import GradeForm from "./GradeForm";
import GradeList from "./GradeList";
import { Grade } from "../Services/Grade";

export default function GradePage() {
  const [editing, setEditing] = useState<Grade | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestión de Grados</h2>
      <GradeForm editing={editing} setEditing={setEditing} refresh={refresh} />
      <GradeList
        setEditing={setEditing}
        refreshFlag={refreshFlag}
        refresh={refresh}
      />
    </div>
  );
}
