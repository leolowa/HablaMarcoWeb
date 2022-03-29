import React, {useEffect, useLayoutEffect} from 'react';
import './Voces.css';
const ContenedorVideoVoces = ({
  proximoVideo,
  proximoVideoDeLaMarca,

  cerrarComerciales,
  videoSeleccionado,
}) => {
  useEffect(() => {
    document.querySelector('.contenidoVideo').volume = 0.1;
    document.querySelector('.marcoVideo').classList.add('marcoVideoAbierto');
    return () => {};
  }, [cerrarComerciales]);
  useLayoutEffect(() => {
    return () => {
      document.querySelector('.marcoVideo').classList.remove('marcoVideoAbierto');
      document.querySelector('.iconoMenu').style.display = 'initial';
      document.querySelector('.contenedorVideosWork').style.transitionDelay = '0.3s';
      document.querySelector('.contenedorVideosWork').classList.remove('aperturaComerciales');
      document.querySelector('body').style.overflow = 'scroll';
    };
  }, []);
  return (
    <React.Fragment>
      <div className="contenedorVideosWork">
        <div className="marcoVideo">
          <video key={videoSeleccionado?.video?.url} className="contenidoVideo" controls>
            <source type="video/mp4" src={videoSeleccionado?.video?.url}></source>
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
    </React.Fragment>
  );
};

export default ContenedorVideoVoces;
