import React from 'react';
import HablaMarco from '../../Static/HablaMarco.svg';
//import marcoNadando from '../../Static/Video/marcoNadando.mov';
import './Home.css';

const Home = () => {

  return (
    <React.Fragment>
      <div className="Home">
    
        <div id="home" className="body-Home animate__animated animate__fadeIn">
        
          <div className="contenedor-Marca">
            <img alt="" className="Marca" src={HablaMarco}></img>
          </div>
          
          <div className="contenedor-Scroll">
            <p className="texto-Scroll">Scroll</p>
            <i className="bi bi-caret-down-fill icono-Scroll"></i>
          </div>
            
          <div className="contenedorMarcoNadando">
            {/* <video className="videoMarcoNadando" autoPlay={true} muted="muted" loop>
              <source type="video/mp4" src={marcoNadando}></source>
            </video> */}
          </div>
        </div>

      </div>
 
    </React.Fragment>
  )
}

export default Home;
