import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import VehicleType from "./pages/VehicleType"; // pantalla “Vamos a prepararlo todo”
import Garage from "./pages/Garage";           // si existe y la usas luego

const App: React.FC = () => {
  return (
    <Routes>
      {/* ✅ Home: manda al onboarding */}
      <Route path="/" element={<Navigate to="/garage" replace />} />

      {/* ✅ “Garaje” = onboarding (elige coche/moto) */}
      <Route path="/garage" element={<VehicleType />} />

      {/* ✅ Dashboard (la pantalla “Mis Vehículos”) */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* (Opcional) si tienes un garaje real/listado de vehículos */}
      <Route path="/vehicles" element={<Garage />} />
    </Routes>
  );
};

export default App;
