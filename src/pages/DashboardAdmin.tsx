import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Widgets from "../components/Widgets";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Seguimiento from "../components/Seguimiento";
import Experiencias from "../components/Experiencias";
import AgregarExperiencia from "../components/AgregarExperiencia"; // <-- nuevo
import Evaluacion from "../components/Evaluacion";
import ModulosTabs from "../components/Modulos/ModulosTabs";

const DashboardAdmin: React.FC = () => {
  const [activeContent, setActiveContent] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <TopBar />
      <Sidebar setActiveContent={setActiveContent} />

      <main className="flex-1 p-8 transition-all duration-300 ease-in-out overflow-hidden">
        {activeContent === "dashboard" && <Widgets />}
        {activeContent === "seguimiento" && <Seguimiento />}
        {activeContent === "evaluacion" && <Evaluacion />}
        {activeContent === "experiencias" && (
          <Experiencias onAgregar={() => setActiveContent("agregar-experiencia")} />
        )}
        {activeContent === "agregar-experiencia" && (
          <AgregarExperiencia onVolver={() => setActiveContent("experiencias")} />
        )}
        {activeContent === "modulos" && <ModulosTabs />}
      </main>
    </div>
  );
};

export default DashboardAdmin;
