import React from "react";
import '../estilos/deporte.css';


function Deportesfavoritos(){
    return(
        <section className="deportes">
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
            <img src="./imag/3.jpg" alt="ecuavoley" />
            <h3>Ecuavoley</h3>
          </div>
        </div>
      </section>
    );

}
export default Deportesfavoritos;