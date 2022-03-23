import React from 'react';
import './Home.css';
import HablaMarco from '../../Static/HablaMarco.svg';
import baileConPerro from '../../Static/Video/videoPerro2.mp4';

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home">
        <div id="home" className="body-Home animate__animated animate__fadeIn">
          <div className="relative">
            <div className="contenedor-Marca">
              <img alt="" className="Marca" src={HablaMarco}></img>
            </div>
            <div className="contenedor-Scroll">
              <i className="bi bi-caret-down-fill icono-Scroll"></i>
            </div>

            <div className="contenedorVideoInicio">
              <video
                loop
                muted
                autoPlay
                playsInline
                src={baileConPerro}
                className="videoMarcoInicio"
              />
            </div>

            <div className="circuloRojo-Inicio"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
