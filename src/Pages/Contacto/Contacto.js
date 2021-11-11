import React, {useState} from 'react';
import VoiceOvers from '../../Static/voiceovers.gif';
import iconoEquipamientoUp from '../../Static/iconoEquipamiento.svg';
import iconoEquipamientoDown from '../../Static/iconoEquipamientoDown.svg';

//import Heladera from '../../Static/Circulo-Links/video_heladera.mp4';
import '../Contacto/Contacto.css';

const Contacto = () => {
  const [isColapsado, setIsColapsado] = useState(false);

  const mostrarTecnología = () => {
    if (isColapsado !== true) {
      const elementoColapsable = document.querySelector('.contenedor-TextoTecnologia');
      elementoColapsable.classList.remove('contenedor-TextoTecnologia-Abierto');
      setIsColapsado(true);
    } else {
      const elementoColapsable = document.querySelector('.contenedor-TextoTecnologia');
      elementoColapsable.classList.add('contenedor-TextoTecnologia-Abierto');
      setIsColapsado(false);
    }
  };
  return (
    <>
      <div className="body-Contacto">
        <div className="Texto-InfoContacto-A">
          <a rel="noreferrer" href="mailto:hola@hablamarco.com" className="linksContacto">
            <div className="contenedorEmail">
              <span className="texto-Hola">hola</span>
              <span className="texto-email">@hablamarco.com</span>
            </div>
          </a>
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5491167485924"
            target="_blank"
            className="linksContacto"
          >
            <span className="texto-numeroDeTel"> +54 9 11 6748 5924</span>
          </a>
        </div>
        <div className="contenedor-InfoContacto-B">
          <a
            rel="noreferrer"
            href="https://www.instagram.com/habla.marco/"
            target="_blank"
            className="linksContacto"
          >
            <div className="contenedorInstagram">
              <span className="texto-Instagram">instagram.com/</span>
              <span className="textoHablaMarco-Instagram">habla.marco</span>
            </div>
          </a>
        </div>
        <div className="contenedorEquipamiento">
          <div className="contenedor-TextoTecnologia">
            <button onClick={() => mostrarTecnología()} className="Texto-Equipamiento">
              Tecnología
              {isColapsado ? (
                <img alt="" className="iconoEquipamientoDown" src={iconoEquipamientoDown}></img>
              ) : (
                <img alt="" className="iconoEquipamiento" src={iconoEquipamientoUp}></img>
              )}
            </button>
            <p className="Texto-Tecnologia">
              Antelope Zen Tour synergy core.
              <br />
              Sennheiser mkh 416.
              <br /> Neumann TLM 103.
              <br />
              Mac Mini.
            </p>
          </div>
        </div>
        <div className="contenedor-ImgVoiceOvers">
          <img alt="" className="imagenVoiceOvers" src={VoiceOvers}></img>
        </div>
      </div>
      <div className="CI-FraseSutil">
        <p>Ésta página pertenece a una persona en construcción</p>
      </div>
    </>
  );
};

export default Contacto;
