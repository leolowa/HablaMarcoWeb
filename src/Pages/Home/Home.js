import React from 'react';
import './Home.css';
import HablaMarco from '../../Static/HablaMarco.svg';
import PuntoRojo from '../../Static/PuntoRojo.svg';
import baileConPerro from '../../Static/Video/baileperro720.mp4';
import baileConPerroCel from '../../Static/Video/BaileConPerro1280.mp4';
import {useMediaQuery} from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({query: '(max-width: 480px)'});
  return (
    <React.Fragment>
      <div className="Home">
        <div id="home" className="body-Home animate__animated animate__fadeIn">
          <div className="contenedor-central">
            <div className="contenedor-Marca">
              <img alt="" className="Marca" src={HablaMarco}></img>
            </div>

            <div className="contenedor-circulo">
              <img alt="" className="circulo" src={PuntoRojo}></img>
            </div>
          </div>
          <div className="contenedor-video-perro">
            <video
              loop
              muted
              autoPlay
              playsInline
              src={isMobile ? baileConPerroCel : baileConPerro}
              className="videoMarcoInicio"
            />
          </div>

          <div className="contenedor-Scroll">
            <i className="bi bi-caret-down-fill icono-Scroll"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
