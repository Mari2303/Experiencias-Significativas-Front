import LineThematicForm from "./LineThematicForm";
import LineThematicList from "./LineThematicList";
import { LineThematic } from "../Services/LineThematic";
import { useState } from "react";

export default function LineThematicPage() {
  const [editing, setEditing] = useState<LineThematic | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestión de Líneas Temáticas</h2>
      <LineThematicForm editing={editing} setEditing={setEditing} refresh={refresh} />
      <LineThematicList
        setEditing={setEditing}
        refreshFlag={refreshFlag}
        refresh={refresh}
      />
    </div>
  );
}
