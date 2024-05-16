import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar"
import { Presentacion } from './components/Presentacion';
import { Contador } from './components/Contador';
import { Colores } from './components/Colores';
import { Emojis } from './components/Emojis';
import { Adivinar } from './components/Adivinar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/presentacion" element={<Presentacion />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/colores" element={<Colores />} />
        <Route path="/emojis" element={<Emojis />} />
        <Route path="/adivinar" element={<Adivinar />} />
      </Routes>
    </Router>
  );
}

export default App;