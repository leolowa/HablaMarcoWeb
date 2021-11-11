import React, {useState} from 'react';
import Audible from '../../Static/Circulo-Links/AUDIBLE.svg';
import Avene from '../../Static/Circulo-Links/AVENE.svg';
import CocaCola from '../../Static/Circulo-Links/COCACOLA.svg';
import Disney from '../../Static/Circulo-Links/DISNEY.svg';
import Fanta from '../../Static/Circulo-Links/FANTA.svg';
import Ladysoft from '../../Static/Circulo-Links/LADYSOFT.svg';
import Lays from '../../Static/Circulo-Links/LAYS.svg';
import Sprite from '../../Static/Circulo-Links/SPRITE.svg';
import Honda from '../../Static/Circulo-Links/HONDA.svg';
import Pantene from '../../Static/Circulo-Links/PANTENE.svg';
import manchaWork from '../../Static/MenuManchaNegro.gif'; /* 
import CocaColaVideo from '../../Static/Video/CocaCola.mp4';
import SpriteVideo from '../../Static/Video/Sprite.mp4';
import FantaVideo from '../../Static/Video/FantaVideo.mp4';
import AudibleVideo from '../../Static/Video/AudibleVideoSpanish.mp4';
import LaysVideo from '../../Static/Video/LaysVideo.mp4';
import PanteneVideo from '../../Static/Video/PanteneVideo.mp4';
import HondaVideo from '../../Static/Video/HondaVideo.mp4';
import DisneyVideo from '../../Static/Video/DisneyVideo.mp4';
import LadysoftVideo from '../../Static/Video/LadysoftVideo.mp4';
import AveneVideo from '../../Static/Video/AveneVideo.mp4'; */
import arregloUrl from './enlacesWork';

import './Work.css';

const Work = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState({url: '', index: undefined});
  /* const [cursor, setCursor] = useState(); */
  function mostrarVideo(url) {
    const contenedorVideosWork = document.querySelector('.contenedorVideosWork');

    setTimeout(() => {
      document.querySelector('.iconoMenu').style.display = 'none';
    }, 790);
    contenedorVideosWork.classList.add('aperturaComerciales');
    contenedorVideosWork.scrollIntoView();
    document.querySelector('.contenidoVideo').volume = 0.1;
    document.querySelector('.marcoVideo').style.opacity = 1;
    cargarVideo(url);
  }

  const cerrarComerciales = () => {
    document.querySelector('.iconoMenu').style.display = 'initial';
    document.querySelector('.marcoVideo').style.opacity = 0;
    document.querySelector('.contenidoVideo').pause();
    document.querySelector('.contenedorVideosWork').classList.remove('aperturaComerciales');
  };
  const cargarVideo = url => {
    setVideoSeleccionado({...videoSeleccionado, url: url});
  };

  const proximo = proximo => {
    if (proximo !== -1) {
      /* DERECHA */
      if (videoSeleccionado.index === undefined) {
        let proxVideo = {};
        proxVideo.url = arregloUrl[0];
        proxVideo.index = 0;
        setVideoSeleccionado(proxVideo);
      } else {
        if (videoSeleccionado.index < arregloUrl.length - 1) {
          console.log('existe indice');
          let proxVideo = {};
          proxVideo.url = arregloUrl[videoSeleccionado.index + 1];
          proxVideo.index = videoSeleccionado.index + 1;
          setVideoSeleccionado(proxVideo);
        } else {
          console.log('superó arreglo');
          let proxVideo = {};
          proxVideo.url = arregloUrl[0];
          proxVideo.index = 0;
          setVideoSeleccionado(proxVideo);
        }
      }
    } else {
      /* IZQUIERDA */
      if (videoSeleccionado.index === undefined) {
        let proxVideo = {};
        proxVideo.url = arregloUrl[0];
        proxVideo.index = 0;
        setVideoSeleccionado(proxVideo);
      } else {
        if (videoSeleccionado.index < arregloUrl.length - 1) {
          console.log('existe indice');
          let proxVideo = {};
          proxVideo.url = arregloUrl[videoSeleccionado.index + 1];
          proxVideo.index = videoSeleccionado.index + 1;
          setVideoSeleccionado(proxVideo);
        } else {
          console.log('superó arreglo');
          let proxVideo = {};
          proxVideo.url = arregloUrl[0];
          proxVideo.index = 0;
          setVideoSeleccionado(proxVideo);
        }
      }
    }
  };
  /* const obtenerElementoCursor = (elemento) =>{
        setCursor(elemento);
        
    }
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        obtenerElementoCursor(cursor);
        document.addEventListener('mousemove', (e) =>{
            cursor.style.left = e.pageX + 'px';
            cursor.style.top= e.pageY + 'px';
        });
        return () => {
            document.removeEventListener('mousemove',()=>{})
        }
    }) */

  return (
    <div className="work">
      <div id="contenedorVideosWork" className="contenedorVideosWork">
        <div className="marcoVideo">
          <video key={videoSeleccionado.url} className="contenidoVideo" controls>
            <source type="video/mp4" src={videoSeleccionado.url}></source>
          </video>
        </div>
        <button
          onClick={() => cerrarComerciales()}
          className="botonAccionesVideosComerciales posicionIconoCerrar"
        >
          <i className="bi bi-x iconoCerrarComercialesWork"></i>
        </button>
        <button
          onClick={() => proximo(-1)}
          className="botonAccionesVideosComerciales posicionSiguienteLeft"
        >
          <i className="bi bi-arrow-left-short iconoCerrarComercialesWork"></i>
        </button>
        <button
          onClick={() => proximo(1)}
          className="botonAccionesVideosComerciales posicionSiguienteRight"
        >
          <i className="bi bi-arrow-right-short iconoCerrarComercialesWork"></i>
        </button>
      </div>

      <div className="body-Work">
        <div className="contenedorVerMas">
          <div className="botonMas">
            <a
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCq9CudVe_LrZR48Ls2wb8LA/videos"
              target="_blank"
              className="botonMas"
            >
              <p className="textoMas">mas</p>
              <img alt="" className="manchaWork" src={manchaWork}></img>
            </a>
          </div>
        </div>

        <span className="Texto-Work">VOCES</span>

        <div className="contenedor-Links rotar">
          <div>
            <img
              id="audible"
              /* onClick={() => mostrarVideo(AudibleVideo)} */
              className="audible cursorLink"
              alt="#"
              src={Audible}
            ></img>
          </div>
          <div>
            <img
              id="avene"
              /* onClick={() => mostrarVideo(AveneVideo)} */
              className="avene cursorLink"
              alt="#"
              src={Avene}
            ></img>
          </div>
          <div>
            <img
              id="cocacola"
              /* onClick={() => mostrarVideo(CocaColaVideo)} */
              className="coca cursorLink"
              alt="#"
              src={CocaCola}
            ></img>
          </div>
          <div>
            <img
              id="disney"
              /* onClick={() => mostrarVideo(DisneyVideo)} */
              className="disney cursorLink"
              alt="#"
              src={Disney}
            ></img>
          </div>
          <div>
            <img
              id="fanta"
              /* onClick={() => mostrarVideo(FantaVideo)} */
              className="fanta cursorLink"
              alt="#"
              src={Fanta}
            ></img>
          </div>
          <div>
            <img
              id="ladysoft"
              /*  onClick={() => mostrarVideo(LadysoftVideo)} */
              className="ladysoft cursorLink"
              alt="#"
              src={Ladysoft}
            ></img>
          </div>
          <div>
            <img
              id="lays"
              /* onClick={() => mostrarVideo(LaysVideo)} */
              className="lays cursorLink"
              alt="#"
              src={Lays}
            ></img>
          </div>
          <div>
            <img
              id="sprite"
              /* onClick={() => mostrarVideo(SpriteVideo)} */
              className="sprite cursorLink"
              alt="#"
              src={Sprite}
            ></img>
          </div>
          <div>
            <img
              id="honda"
              /* onClick={() => mostrarVideo(HondaVideo)} */
              className="honda cursorLink"
              alt="#"
              src={Honda}
            ></img>
          </div>
          <div>
            <img
              id="pantene"
              /* onClick={() => mostrarVideo(PanteneVideo)} */
              className="pantene cursorLink"
              alt="#"
              src={Pantene}
            ></img>
          </div>
        </div>
        <div className="cursor"></div>
      </div>
    </div>
  );
};

export default Work;
