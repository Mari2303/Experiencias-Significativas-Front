// src/components/Sidebar.tsx
import React, { useState } from "react";
import { FaBars, FaHome, FaUser, FaUsers, FaCog } from "react-icons/fa";

interface SidebarProps {
  setActiveContent: (content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActive] = useState("dashboard");

  const handleSelect = (content: string) => {
    setActive(content);
    setActiveContent(content);
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 text-2xl text-gray-700 hover:text-indigo-600"
      >
        <FaBars />
      </button>

      {/* Fondo oscuro detrás del sidebar */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
         
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-13 rounded-t-lg right-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-30
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="mt-14">
          <button
            onClick={() => handleSelect("dashboard")}
            className={`flex items-center p-4 w-full hover:bg-gray-200 hover:text-indigo-600 ${
              activeContent === "dashboard"
                ? "bg-gray-100 text-indigo-600"
                : "text-gray-700"
            }`}
          >
            <FaHome className="mr-3" /> Inicio
          </button>

          <button
            onClick={() => handleSelect("seguimiento")}
            className={`flex items-center p-4 w-full hover:bg-gray-200 hover:text-indigo-600 ${
              activeContent === "seguimiento"
                ? "bg-gray-100 text-indigo-600"
                : "text-gray-700"
            }`}
          >
            <FaUser className="mr-3" /> Seguimiento
          </button>

          <button
            onClick={() => handleSelect("experiencias")}
            className={`flex items-center p-4 w-full hover:bg-gray-200 hover:text-indigo-600 ${
              activeContent === "experiencias"
                ? "bg-gray-100 text-indigo-600"
                : "text-gray-700"
            }`}
          >
            <FaUsers className="mr-3" /> Experiencia
          </button>

          <button
            onClick={() => handleSelect("evaluacion")}
            className={`flex items-center p-4 w-full hover:bg-gray-200 hover:text-indigo-600 ${
              activeContent === "evaluacion"
                ? "bg-gray-100 text-indigo-600"
                : "text-gray-700"
            }`}
          >
            <FaCog className="mr-3" /> Evaluación
          </button>


          <button
            onClick={() => handleSelect("modulos")}
            className={`flex items-center p-4 w-full hover:bg-gray-200 hover:text-indigo-600 ${
              activeContent === "modulos"
                ? "bg-gray-100 text-indigo-600"
                : "text-gray-700"
            }`}
          >
            <FaCog className="mr-3" /> Modulos
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
