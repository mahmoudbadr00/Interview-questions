// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import FavoritesPage from './components/FavoritesPage';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/section/:sectionId" element={<SectionPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};
export default Router;