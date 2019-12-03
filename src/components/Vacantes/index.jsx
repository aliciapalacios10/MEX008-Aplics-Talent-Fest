import React from 'react';
import './vacantes.css';
import ImgVacantes from '../../img/pdf.png';

const Vacantes = () => {
    return (
        <div className="vacantes-section">
            <h1 className="title">Vacantes</h1>
            <ul className="group-png">
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
            </ul>
            <ul className="group-png">
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
                <li><img className="img-vacantes" src={ImgVacantes} /></li>
            </ul>
            
        </div>
    )
}

export default Vacantes;