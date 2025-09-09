import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Experiencias from "../components/Experiencias";
import AgregarExperiencia from "../components/AgregarExperiencia"; // <-- nuevo


const DashboardTeacher: React.FC = () => {
  const [activeContent, setActiveContent] = useState("dashboardTeacher");

  return (
    <div className="flex flex-col min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/fondo_teacher.png)' }}>
      <TopBar />
      <Sidebar setActiveContent={setActiveContent} />

      <div className="flex-1 flex items-center">
       <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-lg text-center      max-w-4xl">
         “Un espacio digital para reconocer, compartir y potenciar las experiencias que construyen una educación más humana, inclusiva y significativa.”
       </h1>
     </div>

      <main className="flex-1 p-8 transition-all duration-300 ease-in-out overflow-hidden bg-transparent">
        {activeContent === "experiencias" && (
          <Experiencias onAgregar={() => setActiveContent("agregar-experiencia")} />
        )}
        {activeContent === "agregar-experiencia" && (
          <AgregarExperiencia onVolver={() => setActiveContent("experiencias")} />
        )}
      </main>
    </div>
  );
};

export default DashboardTeacher;
