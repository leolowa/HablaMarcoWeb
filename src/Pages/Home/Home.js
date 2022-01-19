import React, {useEffect, useRef, useState} from 'react';
import './Home.css';
import HablaMarco from '../../Static/HablaMarco.svg';
import baileConPerro from '../../Static/Video/baileConPerro.mp4';

import baileConPerroGif from '../../Static/Video/baileConPerro.gif';

const Home = ({
  eventoCargaDeVideo = () => {
    console.log('');
  },
}) => {
  const elementoVideo = useRef();
  const [isUsarImagen, setisUsarImagen] = useState(false);
  const [isUsarGif, setIsUsarGif] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMobileIPhone = userAgent.indexOf('iPhone');
    const isMobileAndroid = userAgent.indexOf('Android');
    const player = elementoVideo.current.children[0];
    player.controls = false;
    player.playsinline = true;
    player.muted = true;
    player.setAttribute('muted', '');
    player.autoplay = true;
    /* player.addEventListener('loadeddata', event => {
      eventoCargaDeVideo(true);
    }); */
    if (isMobileAndroid !== -1) {
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute('muted', ''); // leave no stones unturned
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                console.log('falló');
                setisUsarImagen(true);
              });
          }
        }, 0);
      }
    }

    if (isMobileIPhone !== -1) {
      let version = userAgent.split('OS')[1].split('_')[0];
      console.log(version);
      if (version < 12) {
        console.log('Versión Menor a 12');
        setIsUsarGif(true);
        setisUsarImagen(true);
      }
    }
    return () => {
      player.removeEventListener('loadeddata', event => {});
    };
  }, [elementoVideo, eventoCargaDeVideo]);
  return (
    <React.Fragment>
      <div className="Home">
        <div id="home" className="body-Home animate__animated animate__fadeIn">
          <div className="contenedor-Marca">
            <img alt="" className="Marca" src={HablaMarco}></img>
          </div>
          <div className="contenedor-Scroll">
            <i className="bi bi-caret-down-fill icono-Scroll"></i>
          </div>
          {!isUsarImagen ? (
            <div
              ref={elementoVideo}
              className="contenedorVideoInicio"
              dangerouslySetInnerHTML={{
                __html: `
                        <video
                          loop
                          muted
                          autoplay
                          playsinline
                          src="${baileConPerro}"
                          class="videoMarcoInicio"
                        />,
                        `,
              }}
            ></div>
          ) : (
            <div
              ref={elementoVideo}
              className={isUsarGif ? 'contenedorGifInicio' : 'contenedorVideoInicio'}
            >
              <img
                alt=""
                className={isUsarGif ? 'imgGif' : 'imgVideo'}
                src={isUsarGif ? baileConPerroGif : baileConPerro}
              ></img>
            </div>
          )}
          <div className="circuloRojo-Inicio"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
