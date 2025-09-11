// src/components/Sidebar.tsx
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { fetchMenu, MenuItem } from "../Api/Services/menuService";

interface SidebarProps {
  setActiveContent: (content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActive] = useState("");
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const userId = Number(localStorage.getItem("userId"));
    const token = localStorage.getItem("token");
    if (!userId || !token) return;
    fetchMenu(userId, token)
      .then(setMenu)
      .catch(() => setMenu([]));
  }, []);

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
        className={`fixed top-24 rounded-t-lg right-4 h-full w-90 bg-gray-200 shadow-md transform transition-transform duration-300 ease-in-out z-30
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <p className="text-[#00aaff] text-3xl ml-38 font-semibold py-15">Gestión de Experiencias Significativas</p>

        <nav className="mt-14">
          {menu.length === 0 && (
            <div className="text-gray-400 text-center py-8">Sin opciones de menú</div>
          )}
          {menu.map((item) => (
            <button
              key={item.formId}
              onClick={() => handleSelect(item.path)}
              className={`flex items-center p-4 w-full hover:bg-gray-200 hover:text-sky-600 transition-colors ${
                activeContent === item.path
                  ? "bg-gray-100 text-sky-600"
                  : "text-gray-700"
              }`}
            >
              {/* Si tienes un sistema de íconos, puedes mapear item.icon aquí */}
              <span className="mr-3">
                {/* Ejemplo: <Icon name={item.icon} /> */}
                <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="8" stroke="#00aaff" strokeWidth="2" /></svg>
              </span>
              {item.form}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
