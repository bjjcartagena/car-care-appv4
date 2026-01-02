import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// De momento comentamos el Login para asegurar que despliega primero
// import Login from './pages/Login'; 

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Ruta de prueba para ver que funciona */}
        <Route path="/" element={<div style={{ padding: 20 }}><h1>¡La App Funciona! 🚗</h1><p>Ahora podemos conectar el Login.</p></div>} />
      </Routes>
    </HashRouter>
  );
};

export default App;