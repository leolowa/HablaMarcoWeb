import React, {useState} from 'react';
import './Reel.css';
import './BotonesReel/BotonesReel.css';
/* import videoPerro from '../../Static/Video/Baile_perro_fondo_blanco.mp4'; */
import reelLatam from '../../Static/Sound/habla-marco-reel-latam-2.mp3';
import reelArg from '../../Static/Sound/habla-marco-reelArg.mp3';
import {BotonesReel} from './BotonesReel/BotonesReel';
import ElementoVideo from '../../Components/ElementoVideo/ElementoVideo';
import Palta from '../../Components/Palta/Palta';

const Reel = () => {
  const [isPlayReel, setIsPlayReel] = useState(false);
  const [isReelLatam, setIsReelLatam] = useState(false);
  const [isReelArg, setIsReelArg] = useState(false);
  /* ----- Estado apertura palta ----- */
  const [isPaltaAbierta, setIsPaltaAbierta] = useState(false);

  const reproducirReel = idReel => {
    const element = document.querySelector('#playReel');
    const elementoVideo = document.querySelector('#videoReel');
    if (idReel === 'Latam') {
      const elementoAudio = document.querySelector('#audioLatam');

      if (isPlayReel !== true) {
        element.classList.add('playReel');
        elementoVideo.style.opacity = '1';
        elementoVideo.play();
        elementoAudio.play();
        setIsReelLatam(true);
        setIsPlayReel(true);
        setIsPaltaAbierta(true);
      } else {
        setIsReelLatam(false);
        elementoAudio.pause();
        element.classList.remove('playReel');
        elementoVideo.style.opacity = '0';
        elementoVideo.pause();
        setIsPlayReel(false);
        setIsPaltaAbierta(false);
      }
    }

    if (idReel === 'Arg') {
      const elementoAudio = document.querySelector('#audioArg');
      if (isPlayReel !== true) {
        element.classList.add('playReel');
        setIsReelArg(true);
        elementoAudio.play();
        elementoVideo.style.opacity = '1';
        elementoVideo.play();
        element.classList.add('playReel');
        setIsPlayReel(true);
        setIsPaltaAbierta(true);
      } else {
        setIsReelArg(false);
        elementoAudio.pause();
        element.classList.remove('playReel');
        elementoVideo.style.opacity = '0';
        elementoVideo.pause();
        setIsPlayReel(false);
        setIsPaltaAbierta(false);
      }
    }
  };

  const finalizacionVideo = () => {
    const elementoVideo = document.querySelector('#videoReel');
    const element = document.querySelector('#playReel');

    element.classList.remove('playReel');
    elementoVideo.style.opacity = '0';
    setIsPlayReel(false);
  };
  const finalizacionAudio = idReel => {
    if (idReel === 'Latam') {
      setIsReelLatam(false);
      setIsPaltaAbierta(false);
    }
    if (idReel === 'Arg') {
      setIsReelArg(false);
      setIsPaltaAbierta(false);
    } else {
      setIsReelArg(false);
    }
  };
  const finalizaAudio = idReel => {
    console.log('ejecuto onEndend');
  };
  return (
    <React.Fragment>
      <div className="contenedorReel">
        <ElementoVideo
          id="videoReel"
          estilosReproductorVideo="estilosVideoReel"
          isLoop={false}
          isAutoPlay={false}
          /* url={`${videoPerro}`} */
          onEnded={() => {
            finalizacionVideo();
          }}
        />
        <div className="CP-Reel">
          {isPaltaAbierta ? (
            <h1 id="playReel" className="textoReel ReelIzquierdaA">
              RE
            </h1>
          ) : (
            <h1 id="playReel" className="textoReel ReelIzquierdaC">
              RE
            </h1>
          )}
          <div className="CI-Contenedor-Palta">
            <Palta isPaltaAbierta={isPaltaAbierta} />
          </div>
          {isPaltaAbierta ? (
            <h1 className="textoReel ReelDerechaA">EL</h1>
          ) : (
            <h1 className="textoReel ReelDerechaC">EL</h1>
          )}
        </div>

        <div className="contenedorBotonesReel">
          <BotonesReel
            isDisabled={isReelArg}
            isPaused={isReelLatam}
            onPlay={() => reproducirReel('Latam')}
            TextoReel="REEL LATAM"
            tipoReel="ReelLatam"
          />
          <BotonesReel
            isDisabled={isReelLatam}
            isPaused={isReelArg}
            onPlay={() => reproducirReel('Arg')}
            TextoReel="REEL ARG"
            tipoReel="ReelArg"
          />
        </div>
        <audio
          onPause={() => finalizacionAudio('Latam')}
          onEnded={() => finalizaAudio()}
          id="audioLatam"
          src={`${reelLatam}#t=0,29.8`}
        ></audio>
        <audio
          onPause={() => finalizacionAudio('Arg')}
          onEnded={() => finalizaAudio()}
          id="audioArg"
          src={`${reelArg}#t=0,29.8`}
        ></audio>
      </div>
    </React.Fragment>
  );
};

export default Reel;
