import React from 'react';
import './indexHome.css';
import ImgDone from '../../img/clip-done.png';



const Account = () => (
  <div className="home-bground">
    <box>
      <h1 id="home-title">Recursos humanos</h1>
      
    </box>
    
    <div className="home-buttons-container">
    <button className="home-buttons">Solicitud de posición</button>
    <button className="home-buttons">Cartera de posiciones</button>
    <button className="home-buttons">Requisiciones</button>
    <button className="home-buttons">Cartera de postulantes</button>
    </div>

    <img id="img-done" src={ImgDone} />
  </div>
);

export default Account;