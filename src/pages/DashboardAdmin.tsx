import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Widgets from "../components/Widgets";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Tracking from "../components/Tracking";
import Experiences from "../components/Experiences";
import AddExperience from "../components/AddExperience"; // <-- nuevo
import Evaluation from "../components/Evaluation";

const DashboardAdmin: React.FC = () => {
  const [activeContent, setActiveContent] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <TopBar />
      <Sidebar setActiveContent={setActiveContent} />

      <main className="flex-1 p-8 transition-all duration-300 ease-in-out overflow-hidden">
        {activeContent === "dashboard" && <Widgets />}
  {activeContent === "seguimiento" && <Tracking />}
        {activeContent === "evaluacion" && <Evaluation />}
        {activeContent === "experiencias" && (
          <Experiences onAgregar={() => setActiveContent("agregar-experiencia")} />
        )}
        {activeContent === "agregar-experiencia" && (
            <AddExperience onVolver={() => setActiveContent("experiencias")} />
        )}
      </main>
    </div>
  );
};

export default DashboardAdmin;
