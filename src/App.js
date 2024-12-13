import logo from './logo.svg';
import React from 'react';
import './App.css';
import imagen from './imagen3/3.jpg';

function App() {
  return (
    <div className="App">

      <section>
        <h2>Datos personales</h2>
        <p>Nombre: Misael García</p>
        <p>Direccion: Cotocollao</p>
        <p>Telefono:099101722</p>
        <p>Correo Electronico: misael.garcia@epn.edu.ec</p>
      </section>


      <section>
        <h2>Estudios realizados</h2>
        <ol>
          <li>Primaria en Mayor Galo Molina</li>
          <li>Secundaria en Maria Idrobo</li>
          <li>Universidad en Escuela Politecnica Nacional</li>
        </ol>
      </section>



      <section>
        <h2>Herramientas utilizadas</h2>
        <ul>
          <li>Node.js</li>
          <li>Visual Studio Code</li>
          <li>React</li>
        </ul>
      </section>



      <section>
        <h2>Deportes Favoritos</h2>
        <div className="galeria">
          <div className="imagenes">
            <img src="./imag/1.jpg" alt="futbol" />
            <h3>futbol</h3>
          </div>
          <div className="imagenes">
            <img src="./imag/2.jpg" alt="Baloncesto" />
            <h3>Baloncesto</h3>
          </div>
          <div className="imagenes">
            <img src={imagen} alt="ecuavoley" />
            <h3>Ecuavoley</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
