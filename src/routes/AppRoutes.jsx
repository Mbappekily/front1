import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import StagiairePage from '../pages/stagiaire/StagiairePage';
// Importez d'autres pages selon votre structure

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<StagiairePage />} />
        {/* Ajoutez d'autres routes pour vos pages */}
        <Route path="/stagiaires" element={<StagiairePage />} />
        {/* Exemple: <Route path="/apprentis" element={<ApprentiPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;