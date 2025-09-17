// src/components/Sidebar.tsx
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { TbUserScan } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
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
        <div className="flex items-center justify-center mt-8 mb-8">
          <img
            src="../../public/images/CoheteEx.png"
            alt="Logo"
            className="w-20 h-16 object-contain mr-4"
          />
          <p className="text-[#00aaff] text-2xl font-semibold">
            Gestión de <br /> Experiencias Significativas
          </p>
        </div>

        <nav className="mt-20">
          {menu.length === 0 && (
            <div className="text-gray-400 text-center py-8">Sin opciones de menú</div>
          )}
          {menu.filter(item => !["Evaluación", "Users", "Roles", "Persons"].includes(item.form)).map((item) => (
            
            <button
              key={item.formId}
              onClick={() => handleSelect(item.path)}
              className={`flex items-center p-4 w-full rounded-full transition-colors duration-200 group
                ${activeContent === item.path
                  ? "bg-white text-sky-500 font-semibold border-l-4 border-sky-500 rounded-e-full"
                  : "text-black hover:bg-white hover:text-sky-500 hover:border-l-4 hover:border-sky-500 hover:rounded-e-full"}
              `}
            >
              <span className={`-mr-7 flex items-center justify-center w-12 h-11 rounded-full bg-white transition-colors duration-200
                ${activeContent === item.path ? "text-sky-500" : "text-black group-hover:text-sky-500"}`}
              >
                {item.form === "Inicio" ? (
                  <AiOutlineHome size={22} />
                ) : item.form === "Seguimiento" ? (
                  <MdOutlineComputer size={22} />
                ) : item.form === "Experiencia" ? (
                  <LuFileSpreadsheet size={22} />
                ) : item.form === "Persons" ? (
                  <IoPersonSharp size={22} />
                ) : item.form === "Users" ? (
                  <TbUserScan size={22} />
                ) : item.form === "Roles" ? (
                  <RiAdminLine size={22} />
                ) : (
                  <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" /></svg>
                )}
              </span>
              <span className="w-full text-center">{item.form}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
