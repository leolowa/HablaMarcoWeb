import React, {useState, useEffect} from 'react';
import './Voces.css';
import manchaWork from '../../Static/MenuManchaNegro.gif';
import TextoCircular from '../../Components/ElementoVideo/TextoCircular/TextoCircular';
import arregloUrl from './enlacesWork';
import SliderLowa from '../../Components/SliderLowa/SliderLowa';
import ContenedorVideoVoces from './ContenedorVideoVoces';

const Voces = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState();
  // const [videosDeMarca, setVideosDeMarca] = useState('');

  useEffect(() => {
    const contenedorVideosWork = document.querySelector('.contenedorVideosWork');

    if (videoSeleccionado && contenedorVideosWork) {
      contenedorVideosWork.classList.add('aperturaComerciales');
      document.querySelector('body').style.overflow = 'hidden';
      document.querySelector('.iconoMenu').style.display = 'none';
      contenedorVideosWork.focus();
    }
    return () => {};
  }, [videoSeleccionado]);

  function mostrarVideo(comercial) {
    const video = arregloUrl.find(
      element => element.tituloComercial.toLowerCase() === comercial.toLowerCase()
    );
    document.querySelector('#work').scrollIntoView();
    setVideoSeleccionado({...videoSeleccionado, video: video});
  }

  const cerrarComerciales = () => {
    setVideoSeleccionado();
  };

  const proximoVideo = proximo => {
    // setVideosDeMarca('');
    if (proximo !== -1) {
      /* DERECHA */
      if (videoSeleccionado.index === undefined) {
        let proxVideo = {};
        proxVideo.video = arregloUrl[0];
        proxVideo.index = 0;
        setVideoSeleccionado(proxVideo);
      } else {
        if (videoSeleccionado.index < arregloUrl.length - 1) {
          let proxVideo = {};
          proxVideo.video = arregloUrl[videoSeleccionado.index + 1];
          proxVideo.index = videoSeleccionado.index + 1;
          setVideoSeleccionado(proxVideo);
        } else {
          let proxVideo = {};
          proxVideo.video = arregloUrl[0];
          proxVideo.index = 0;
          setVideoSeleccionado(proxVideo);
        }
      }
    } else {
      /* IZQUIERDA */
      if (videoSeleccionado.index === undefined) {
        let proxVideo = {};
        proxVideo.video = arregloUrl[0];
        proxVideo.index = 0;
        setVideoSeleccionado(proxVideo);
      } else {
        if (videoSeleccionado.index < arregloUrl.length - 1) {
          let proxVideo = {};
          proxVideo.video = arregloUrl[videoSeleccionado.index + 1];
          proxVideo.index = videoSeleccionado.index + 1;
          setVideoSeleccionado(proxVideo);
        } else {
          let proxVideo = {};
          proxVideo.video = arregloUrl[0];
          proxVideo.index = 0;
          setVideoSeleccionado(proxVideo);
        }
      }
    }
  };

  const proximoVideoDeLaMarca = video => {
    setVideoSeleccionado(video);
  };
  const escucharTeclaEsc = e => {
    if (e.keyCode === 27) {
      cerrarComerciales();
    }
  };

  return (
    <div className="CP-Voces">
      <div id="contenedorVideosWork" onKeyUp={e => escucharTeclaEsc(e)} tabIndex="-1">
        {videoSeleccionado && (
          <ContenedorVideoVoces
            proximoVideo={proximoVideo}
            proximoVideoDeLaMarca={proximoVideoDeLaMarca}
            escucharTeclaEsc={escucharTeclaEsc}
            // videosDeMarca={videosDeMarca}
            cerrarComerciales={cerrarComerciales}
            videoSeleccionado={videoSeleccionado}
          />
        )}
      </div>

      <div className="CI-VerMas">
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
      </div>
      <div className="CI-TextoVoces">
        <span className="Texto-Voces">VOCES</span>
      </div>
      <div className="CI-TextoCircular rotar">
        <TextoCircular mostrarComercial={mostrarVideo} />
      </div>
      <div className="CI-Trabajos-Mobile">
        <SliderLowa>
          <tspan className="tSpan" onClick={() => mostrarVideo('Ford')}>
            FORD
          </tspan>
          <tspan onClick={() => mostrarVideo('ESPN')}>ESPN</tspan>
          <tspan onClick={() => mostrarVideo('Audible')}>AUDIBLE </tspan>
          <tspan onClick={() => mostrarVideo('Pantene')}>PANTENE </tspan>
          <tspan onClick={() => mostrarVideo('Disney')}>DISNEY </tspan>
          <tspan onClick={() => mostrarVideo('Paramount+')}>PARAMOUNT+ </tspan>
          <tspan onClick={() => mostrarVideo('Coca Cola')}>COCA-COLA </tspan>
          <tspan onClick={() => mostrarVideo('Schweppes')}>SCHWEPPES </tspan>
          <tspan onClick={() => mostrarVideo('Discovery NF')}>DISCOVERY NF </tspan>
          <tspan onClick={() => mostrarVideo('YPF')}>YPF </tspan>
          <tspan onClick={() => mostrarVideo('Stella Artois')}>STELLA ARTOIS</tspan>
          <tspan onClick={() => mostrarVideo('Honda')}>HONDA &nbsp;&nbsp;&nbsp;</tspan>
          <tspan onClick={() => mostrarVideo('Ingravido')}>INGRAVIDO</tspan>
        </SliderLowa>
      </div>
    </div>
  );
};
export default Voces;
