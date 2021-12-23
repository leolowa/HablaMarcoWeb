import React from 'react';
import './Home.css';
import HablaMarco from '../../Static/HablaMarco.svg';
import baileConPerro from '../../Static/Video/baileConPerro.mp4';
/* import gifBaileConPerro from '../../Static/Video/baileConPerro.gif'; */

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home">
        <div id="home" className="body-Home animate__animated animate__fadeIn">
          <div className="contenedor-Marca">
            <img alt="" className="Marca" src={HablaMarco}></img>
          </div>

          <div className="contenedor-Scroll">
            <i className="bi bi-caret-down-fill icono-Scroll"></i>
          </div>

          <div className="contenedorVideoInicio">
            <video className="videoMarcoInicio" playsInline autoPlay muted loop>
              <source type="video/mp4" src={baileConPerro}></source>
            </video>

            {/* <img alt="" src={gifBaileConPerro} className="gifHome" id="gifHome"></img> */}
          </div>
          <div className="circuloRojo-Inicio"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
