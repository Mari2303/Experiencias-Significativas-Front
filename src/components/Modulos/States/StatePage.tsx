import { useState } from "react";
import StateForm from "./StateForm";
import StateList from "./StateList";
import { IState } from "../Services/State";

export default function StatePage() {
  const [editing, setEditing] = useState<IState | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gestión de Estado</h2>
      <StateForm editing={editing} setEditing={setEditing} refresh={refresh} />
      <StateList
        setEditing={(state) => setEditing(state)}
        refreshFlag={refreshFlag}
        refresh={refresh}
      />
    </div>
  );
}
