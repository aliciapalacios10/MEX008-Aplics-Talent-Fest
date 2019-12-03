import React from 'react';
import ImgDone from '../../img/clip-done.png';
import './new.css';

const New = () => {
    return (
        <div className="home-bground">
        <h1 id="home-title">Recursos humanos</h1>
      <div className="section-home">
        <div className="home-buttons-container">
            <button className="home-buttons">Solicitud de posición</button>
            <button className="home-buttons">Cartera de posiciones</button>
            <button className="home-buttons">Requisiciones</button>
            <button className="home-buttons">Cartera de postulantes</button>
        </div>
        <img className="img-done" src={ImgDone} />
      </div>
  
    </div>
    )
}

export default New;