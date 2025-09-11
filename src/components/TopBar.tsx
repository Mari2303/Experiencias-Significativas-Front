import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronUp, FaUserMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../Api/Services/ChangePassword";

const TopBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultModalType, setResultModalType] = useState<'success' | 'error' | null>(null);
  const [resultModalMessage, setResultModalMessage] = useState("");
  const navigate = useNavigate();

  const handleLogoutConfirm = () => {
    localStorage.removeItem("token"); // Opcional
    navigate("/login");
  };

  // Obtener el userId desde el token o contexto (ajusta según tu app)
  const userId = Number(localStorage.getItem("userId")); // <-- Cambia esto por el userId real

  // Obtener el primer nombre del usuario desde localStorage
  const userName = localStorage.getItem("userName") || "Usuario";

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");
    if (newPassword !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }
    try {
      const resp = await updatePassword({
        userId,
        currentPassword,
        newPassword,
        confirmPassword,
      });
      setResultModalType('success');
      setResultModalMessage(resp?.message || "Contraseña actualizada correctamente");
      setShowResultModal(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowPasswordModal(false);
      setTimeout(() => setShowResultModal(false), 2500);
    } catch (err: any) {
      setResultModalType('error');
      setResultModalMessage(err?.response?.data?.message || err?.message || "Error al actualizar la contraseña");
      setShowResultModal(true);
      setTimeout(() => setShowResultModal(false), 2500);
    }
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
            <span>{userName}</span>
            {openMenu ? <FaChevronUp /> : <FaChevronDown />}
            {/* Menú desplegable */}
            {openMenu && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg overflow-hidden w-44 z-10 flex flex-col">
                <button
                  className="py-1 hover:bg-gray-100 text-center"
                  onClick={() => {
                    setShowPasswordModal(true);
                    setOpenMenu(false);
                  }}
                >
                  Cambiar Contraseña
                </button>
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

      {/* Modal Cambiar Contraseña */}
  {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-10 rounded-2xl text-center w-[32rem] max-w-full">
            <h5 className="font-bold text-3xl mb-8">Cambiar contraseña</h5>
            <form className="flex flex-col gap-6" onSubmit={handlePasswordChange}>
              <input
                type="password"
                placeholder="Ingresa tu contraseña actual"
                className="border border-gray-300 rounded px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-lg"
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                autoComplete="current-password"
              />
              <input
                type="password"
                placeholder="Ingresa tu nueva contraseña"
                className="border border-gray-300 rounded px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-lg"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                autoComplete="new-password"
              />
              <input
                type="password"
                placeholder="Confirma tu nueva contraseña"
                className="border border-gray-300 rounded px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 text-lg"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
              {(passwordError || passwordSuccess) && (
                <div className={
                  passwordError
                    ? "text-red-500 font-bold bg-red-100 rounded p-2"
                    : "text-green-600 font-bold bg-green-100 rounded p-2"
                }>
                  {passwordError || passwordSuccess}
                </div>
              )}
              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-xl px-8 py-3 font-bold hover:bg-blue-700 text-lg py-30"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white rounded-xl px-8 py-3 font-bold hover:bg-gray-500 text-lg"
                  onClick={() => setShowPasswordModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal resultado cambio contraseña */}
      {showResultModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1100]">
          <div className={`bg-white p-8 rounded-xl text-center w-96 shadow-lg ${resultModalType === 'success' ? 'border-green-500 border-2' : 'border-red-500 border-2'}`}>
            <h5 className={`font-bold text-2xl mb-4 ${resultModalType === 'success' ? 'text-green-600' : 'text-red-600'}`}>{resultModalType === 'success' ? '¡Éxito!' : 'Error'}</h5>
            <div className="text-lg">{resultModalMessage}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
