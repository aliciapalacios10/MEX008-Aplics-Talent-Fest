import React from 'react';

import ImgWelcome from '../../img/clip-1.png';
// import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Account = () => (
  <div className="landing">
    <div className="information-signin">
      <h1 className="logo" >AFFINITY</h1>
      <h4 className="slogan" > Mejores procesos en RH </h4>
      <button className="btn-welcome">
        <Link className="btn-login" to={ROUTES.SIGN_IN}>Comenzar</Link>
      </button>
    </div>

    <img className="img-welcome" src={ImgWelcome} />
  </div>
);

export default Account;