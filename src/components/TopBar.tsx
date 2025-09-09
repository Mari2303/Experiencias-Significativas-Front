import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp, FaUserMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TopBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutConfirm = () => {
    localStorage.removeItem("token"); // Opcional
    navigate("/login");
  };

  return (
      <div
        className="rounded flex justify-between items-center px-3 mt-10 py-2 bg-gray-200 relative w-[98%] left-[1%]"
      >
        {/* Barra de búsqueda */}
        <div className="flex items-center bg-white rounded px-2 py-1">
          <input
            type="text"
            placeholder="Buscar Experiencia"
            className="border-none outline-none py-1 pl-2 pr-32 text-sm bg-transparent"
          />
          <FaSearch className="text-cyan-700 cursor-pointer ml-2" />
        </div>

        {/* Info de usuario y botón sesión */}
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-3 cursor-pointer relative"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span>Juan Perdomo</span>
            {openMenu ? <FaChevronUp /> : <FaChevronDown />}
            {/* Menú desplegable */}
            {openMenu && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg overflow-hidden w-44 z-10 flex flex-col">
                <button className="py-1 hover:bg-gray-100 text-center">Cambiar Contraseña</button>
                <button className="py-1 hover:bg-gray-100 text-center">Ayuda</button>
                <button
                  className="py-1 bg-red-600 text-white text-center flex items-center justify-center gap-2 hover:bg-red-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                  }}
                >
                  Finalizar sesión
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

      {/* Modal personalizado */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-xl text-center w-72">
            <h5 className="font-bold text-2xl mb-4">¿Estas seguro de cerrar sesión?</h5>
            <FaUserMinus className="text-6xl text-black mx-auto mb-4" />
            <div className="flex justify-around mt-4">
              <button
                onClick={handleLogoutConfirm}
                className="bg-green-400 text-white rounded-10 px-8 py-2 font-bold hover:bg-green-500 text-lg"
              >
                Si
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white rounded-lg px-8 py-2 font-bold hover:bg-red-600 text-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
