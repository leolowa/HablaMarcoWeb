import React from 'react';
import HablaMarco from '../../Static/HablaMarco.svg';
import marcoNadando from '../../Static/Video/marcoNadando.mov';
import './Home.css';

const Home = () => {

  function cerrarVideo(){

    const app = document.querySelector('#body');
    const body_home = document.querySelector('.body-Home');
    
    body_home.classList.remove('magictime', 'boingOutDown');
    app.classList.remove('noScroll');

  };

  return (
    <>
      <div className="Home">
        
        <div className="contenedorVideoHome">
          <button onClick={()=>cerrarVideo()} className="contenedorCerrarVideoHome">
            <i className="bi bi-x iconoCerrar"></i>
          </button>
        </div>

        <div id="home" className="body-Home animate__animated animate__fadeIn">
        
          <div className="contenedor-Marca  ">
            <img alt="" className="Marca" src={HablaMarco}></img>
          </div>
        
          <div className="contenedor-Scroll">
            <p className="texto-Scroll">Scroll</p>
            <i className="bi bi-caret-down-fill icono-Scroll"></i>
          </div>
          <div className="contenedorMarcoNadando">
            <video className="videoMarcoNadando" autoPlay={true} muted="muted" loop>
              <source type="video/mp4" src={marcoNadando}></source>
            </video>
          </div>
        </div>

      </div>
 
    </>
  )
}

export default Home;
