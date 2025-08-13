import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaUserMinus } from "react-icons/fa";

const TopBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutConfirm = () => {
    localStorage.removeItem("token"); // Opcional
    navigate("/login");
  };

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center px-3"
        style={{
          backgroundColor: "#e5e5e5",
          padding: "8px 0",
          position: "relative",
        }}
      >
        {/* Barra de búsqueda */}
        <div
          className="d-flex align-items-center"
          style={{
            background: "#fff",
            borderRadius: "5px",
            padding: "3px 8px",
          }}
        >
          <input
            type="text"
            placeholder="Buscar Experiencia"
            style={{
              border: "none",
              outline: "none",
              padding: "5px 350px 0 10px",
            }}
          />
          <FaSearch style={{ color: "#5f9ea0", cursor: "pointer" }} />
        </div>

        {/* Info de usuario */}
        <div
          className="d-flex align-items-center gap-3 mr-10"
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Avatar"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
            }}
          />
          <span>Juan Perdomo</span>
          {openMenu ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {/* Menú desplegable */}
        {openMenu && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "15px",
              background: "white",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              borderRadius: "8px",
              overflow: "hidden",
              width: "180px",
              zIndex: 10,
            }}
          >
            <button className="dropdown-item">Perfil</button>
            <button className="dropdown-item">Ayuda</button>
            <button
              className="dropdown-item text-white"
              style={{ background: "red" }}
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(true);
              }}
            >
              Finalizar sesión
            </button>
          </div>
        )}
      </div>

      {/* Modal personalizado */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              width: "300px",
            }}
          >
            <h5 style={{ fontWeight: "bold" }}>¿Estás seguro de cerrar sesión?</h5>
            <FaUserMinus style={{ fontSize: "50px", margin: "20px 0 0 110px" }} />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={handleLogoutConfirm}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 20px",
                  fontWeight: "bold",
                }}
              >
                Sí
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 20px",
                  fontWeight: "bold",
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
