import React, {useEffect, useRef, useState} from 'react';
import './Home.css';
import HablaMarco from '../../Static/HablaMarco.svg';
import baileConPerro from '../../Static/Video/baileConPerro.mp4';

import baileConPerroGif from '../../Static/Video/baileConPerro.gif';

/* import gifBaileConPerro from '../../Static/Video/baileConPerro.gif'; */

const Home = () => {
  const elementoVideo = useRef();
  const [isUsarImagen, setisUsarImagen] = useState(false);
  const [setIsUsarGif, setSetIsUsarGif] = useState(false);
  /* console.log('Iphone');
  console.log(isMobileIPhone);
  console.log('Android');
  console.log(isMobileAndroid); */

  useEffect(() => {
    const userAgent = navigator.userAgent;
    console.log(userAgent);
    /* console.log(userAgent.split('OS')[1].split('_')[0]); */

    const isMobileIPhone = userAgent.indexOf('iPhone');
    const isMobileAndroid = userAgent.indexOf('Android');

    /* console.log(elementoVideo); */
    if (isMobileAndroid !== -1) {
      const player = elementoVideo.current.children[0];
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
      if (version < 12) {
        console.log('Versión Menor a 12');
        setSetIsUsarGif(true);
      } else {
        console.log('Versión Mayor a 12');
        setisUsarImagen(true);
      }
    }
  }, [elementoVideo]);
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
            <div ref={elementoVideo} className="contenedorVideoInicio">
              <img
                alt=""
                className="imgVideo"
                src={setIsUsarGif ? baileConPerroGif : baileConPerro}
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
