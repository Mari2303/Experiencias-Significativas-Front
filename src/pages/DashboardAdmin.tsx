import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Widgets from "../components/Widgets";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Tracking from "../components/Tracking";
import Experiences from "../components/Experiences";
import AddExperience from "../components/AddExperience"; // <-- nuevo
import Evaluation from "../components/Evaluation";
import UserList from "../components/UserList";
import RolesList from "../components/RolesList";
import Permissions from "../components/Permissions";
import Modules from "../components/Modules";
import Forms from "../components/Forms";
import UsersRol from "../components/UsersRol";
import FormModule from "../components/FormModule";

const DashboardAdmin: React.FC = () => {
  const [activeContent, setActiveContent] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <TopBar />
      <Sidebar setActiveContent={setActiveContent} />

      <main className="flex-1 p-8 transition-all duration-300 ease-in-out overflow-hidden">
        {activeContent === "dashboard" && <Widgets />}
  {activeContent === "tracking" && <Tracking />}
        {activeContent === "evaluation" && <Evaluation />}
        {activeContent === "users" && <UserList />}
        {activeContent === "roles" && <RolesList />}
        {activeContent === "permissions" && <Permissions />}
        {activeContent === "modules" && <Modules />}
        {activeContent === "forms" && <Forms />}
        {activeContent === "usersRol" && <UsersRol />}
        {activeContent === "formModule" && <FormModule />}
        {activeContent === "experiences" && (
        <Experiences onAgregar={() => setActiveContent("agregar-experiencia")} />
        )}
        {activeContent === "agregar-experiencia" && (
            <AddExperience onVolver={() => setActiveContent("experiences")} />
        )}
      </main>
    </div>
  );
};

export default DashboardAdmin;
