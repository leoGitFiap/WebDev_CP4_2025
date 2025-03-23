import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* Fica fixo em todas as rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer /> {/* Fica fixo em todas as rotas */}
      </div>
    </Router>
  );
}

export default App;
