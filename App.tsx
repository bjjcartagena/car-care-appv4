import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Ruta Principal: Directa al contenido, sin Login */}
        <Route path="/" element={
          <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
            <h1>🚗 Car Care App</h1>
            <p>Bienvenido a tu gestor de mantenimiento.</p>
            <hr />
            <div style={{ marginTop: '20px' }}>
              <h3>Mis Vehículos</h3>
              <p>Aquí aparecerá tu lista de coches pronto.</p>
              <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
                + Añadir Vehículo
              </button>
            </div>
          </div>
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;