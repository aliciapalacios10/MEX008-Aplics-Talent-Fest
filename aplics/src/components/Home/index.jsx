import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);
const condition = authUser => !!authUser;


export default withAuthorization(condition)(HomePage);
//   <div className="home-bground">
//       <h1 id="home-title">Recursos humanos</h1>
//     <div className="section-home">
//       <div className="home-buttons-container">
//           <button className="home-buttons">Solicitud de posición</button>
//           <button className="home-buttons">Cartera de posiciones</button>
//           <button className="home-buttons">Requisiciones</button>
//           <button className="home-buttons">Cartera de postulantes</button>
//       </div>
//       <img className="img-done" src={ImgDone} />
//     </div>

//   </div>
