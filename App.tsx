import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Garage from "./pages/Garage"; // ✅ tu asistente está aquí (casi seguro)

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* ✅ Home actual */}
        <Route
          path="/"
          element={
            <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
              <h1>🚗 Car Care App</h1>
              <p>Bienvenido a tu gestor de mantenimiento.</p>
              <hr />
              <div style={{ marginTop: "20px" }}>
                <h3>Mis Vehículos</h3>
                <p>Aquí aparecerá tu lista de coches pronto.</p>

                {/* ✅ AHORA SÍ navega */}
                <button
                  onClick={() => (window.location.hash = "#/garage")}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  + Añadir Vehículo
                </button>
              </div>
            </div>
          }
        />

        {/* ✅ Ruta del asistente (pantalla verde) */}
        <Route path="/garage" element={<Garage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
