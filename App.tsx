import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Garage from "./pages/Garage";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* ✅ Al entrar en la web, ir directamente al “garaje/onboarding” */}
        <Route path="/" element={<Navigate to="/garage" replace />} />

        {/* ✅ Pantalla verde / asistente (tu “garaje”) */}
        <Route path="/garage" element={<Garage />} />

        {/* ✅ Tu pantalla de “Mis Vehículos” */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ✅ Cualquier otra ruta -> garaje */}
        <Route path="*" element={<Navigate to="/garage" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
