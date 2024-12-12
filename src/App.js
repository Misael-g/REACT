import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_BN-RGdRNDCss6t11gKqVvsuet7GXi1g0Q&s" alt="futbol" />
            <h3>futbol</h3>
          </div>
          <div className="imagenes">
            <img src="https://ca-times.brightspotcdn.com/dims4/default/f9e4af2/2147483647/strip/true/crop/5368x3579+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbc%2Fc5%2F23d2652ac9803539713e7b25107e%2F8b7921a39dc04b748d07efa340236562" alt="Baloncesto" />
            <h3>Baloncesto</h3>
          </div>
          <div className="imagenes">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRW1ZU-5PNdL8beQQLW0mFkuZCarFfyEssg&s" alt="ecuavoley" />
            <h3>Ecuavoley</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
