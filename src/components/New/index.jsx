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
            <button className="home-buttons">Vacantes</button>
            <button className="home-buttons">Historial de requisiciones</button>
            <button className="home-buttons">Postulantes</button>
        </div>
        <img className="img-done" src={ImgDone} />
      </div>
  
    </div>
    )
}

export default New;