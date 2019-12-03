import React from 'react';
import { Link } from 'react-router-dom';
import ImgDone from '../../img/clip-done.png';
import * as ROUTES from '../../constants/routes';
import './new.css';

const New = () => {
    return (
        <div className="home-bground">
        <h1 id="home-title">Recursos humanos</h1>
      <div className="section-home">
        <div className="home-buttons-container">
            <Link className="home-buttons" to={ROUTES.HOME}>Solicitud de posición</Link>
            <Link className="home-buttons"to={ROUTES.SIGN_IN}>Vacantes</Link>
            <Link className="home-buttons"to={ROUTES.REQUISICION_FORM}>Historial de requisiciones</Link>
            <Link className="home-buttons"to={ROUTES.SIGN_IN}>Postulantes</Link>
        </div>
        <img className="img-done" src={ImgDone} />
      </div>
  
    </div>
    )
}

export default New;