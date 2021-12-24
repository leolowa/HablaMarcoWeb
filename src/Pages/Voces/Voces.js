import React, {useState} from 'react';
import './Voces.css';
import manchaWork from '../../Static/MenuManchaNegro.gif';
import TextoCircular from '../../Components/ElementoVideo/TextoCircular/TextoCircular';
import arregloUrl from './enlacesWork';
import SliderLowa from '../../Components/SliderLowa/SliderLowa';

const Voces = () => {
  const [videoSeleccionado, setVideoSeleccionado] = useState({video: '', index: undefined});
  const [videosDeMarca, setVideosDeMarca] = useState('');

  function mostrarVideo(comercial) {
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(() => {
      document.querySelector('.iconoMenu').style.display = 'none';
    }, 450);
    setVideosDeMarca('');
    const contenedorVideosWork = document.querySelector('.contenedorVideosWork');
    contenedorVideosWork.classList.add('aperturaComerciales');
    contenedorVideosWork.scrollIntoView();
    document.querySelector('.contenidoVideo').volume = 0.1;
    document.querySelector('.marcoVideo').classList.add('marcoVideoAbierto');
    cargarVideo(comercial);
  }

  const cerrarComerciales = () => {
    document.querySelector('.marcoVideo').classList.remove('marcoVideoAbierto');
    document.querySelector('.iconoMenu').style.transitionDelay = '2s';
    setTimeout(() => {
      document.querySelector('.iconoMenu').style.display = 'initial';
    }, 1500);
    document.querySelector('.contenidoVideo').pause();
    document.querySelector('.contenedorVideosWork').style.transitionDelay = '1s';

    document.querySelector('.contenedorVideosWork').classList.remove('aperturaComerciales');
    document.querySelector('body').style.overflow = 'initial';
  };
  const cargarVideo = comercial => {
    const video = arregloUrl.find(element => {
      return element.tituloComercial === comercial;
    });
    setVideoSeleccionado({...videoSeleccionado, video: video});
  };

  const proximoVideo = proximo => {
    setVideosDeMarca('');
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
    setVideosDeMarca(video);
  };
  return (
    <div className="CP-Voces">
      <div id="contenedorVideosWork" className="contenedorVideosWork">
        <div className="marcoVideo">
          <video
            key={videosDeMarca ? videosDeMarca.url : videoSeleccionado.video.url}
            className="contenidoVideo"
            controls
          >
            <source
              type="video/mp4"
              src={videosDeMarca ? videosDeMarca.url : videoSeleccionado.video.url}
            ></source>
          </video>
          <button
            onClick={() => cerrarComerciales()}
            className="botonAccionesVideosComerciales posicionIconoCerrar"
          >
            <i className="bi bi-x iconoCerrarComercialesWork"></i>
          </button>
          <button
            onClick={() => proximoVideo(-1)}
            className="botonAccionesVideosComerciales posicionSiguienteLeft"
          >
            <i className="bi bi-arrow-left-short iconoCerrarComercialesWork"></i>
          </button>
          <button
            onClick={() => proximoVideo(1)}
            className="botonAccionesVideosComerciales posicionSiguienteRight"
          >
            <i className="bi bi-arrow-right-short iconoCerrarComercialesWork"></i>
          </button>
          {videoSeleccionado.video.otrasUrls && (
            <div className="CI-tagsComerciales">
              {videoSeleccionado.video.otrasUrls.map((element, index) => {
                return (
                  <p
                    key={index}
                    className="tagComerciales"
                    onClick={() => proximoVideoDeLaMarca(element)}
                  >
                    {element.tituloComercial}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <h6 className="tituloComercial">
          {videoSeleccionado.video.tituloComercial ? videoSeleccionado.video.tituloComercial : ''}
        </h6>
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
          <tspan onClick={() => mostrarVideo('Audible')}>AUDIBLE </tspan>
          <tspan onClick={() => mostrarVideo('Pantene')}>PANTENE </tspan>
          <tspan onClick={() => mostrarVideo('Disney')}>DISNEY </tspan>
          <tspan onClick={() => mostrarVideo('Espn')}>ESPN </tspan>
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
