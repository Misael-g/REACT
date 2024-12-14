import React from 'react';
import './App.css';

import Datospersonales from './componentes/Datospersonales.js';
import EstudiosRealizados from './componentes/EstudiosRealizados.js';
import Herramientasutilizadas from './componentes/Herramientasutilizadas.js';
import Deportesfavoritos from './componentes/Deportesfavoritos.js';

function App() {
  return (
    <div className="App">
      <Datospersonales />
      <EstudiosRealizados />
      <Herramientasutilizadas />
      <Deportesfavoritos />
    </div>
  );
}

export default App;
