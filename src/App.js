import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PurrfessorHome from './components/PurrfessorHome';
import MythBusters from './components/MythBusters';
import RecipeClub from './components/RecipeClub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<PurrfessorHome />} />
          <Route path="mythBusters" element={<MythBusters/>} />
          <Route path="recipeClub" element={<RecipeClub/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
