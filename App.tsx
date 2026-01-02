import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';
import Garage from './pages/Garage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>


        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task-detail" element={<TaskDetail />} />
        <Route path="/garage" element={<Garage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;