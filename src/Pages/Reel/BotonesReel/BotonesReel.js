import React from 'react';
import iconoPause from '../../../Static/iconoPause.svg';

export const BotonesReel = ({
  onPlay,
  isDisabled,
  TextoReel = 'Reel',
  isPaused = false,
  tipoReel = '',
}) => {
  const descargarArchivoReel = tipo => {
    if (tipo === 'ReelLatam') {
      return 'https://hablamarco.com/sound/habla-marco-reel-latam.mp3';
    } else {
      return 'https://hablamarco.com/sound/habla-marco-reel-arg.mp3';
    }
  };
  return (
    <div className="contenedorSubReel">
      <button disabled={isDisabled} onClick={onPlay} className="botonReelPlay">
        {isPaused ? (
          <img alt="" src={iconoPause} className="iconoReel"></img>
        ) : (
          <i className="bi bi-play iconoReel"></i>
        )}
      </button>

      <div className="reelDescarga">
        <h6 className="Texto-Reel">{TextoReel}</h6>
        <a
          download={`${tipoReel}.mp3`}
          href={descargarArchivoReel(tipoReel)}
          target="_blank"
          className="botonReelPlay"
        >
          <i className="bi bi-arrow-down iconoDescarga"></i>
        </a>
      </div>
    </div>
  );
};
