import React, {useState} from 'react';
import VoiceOvers from '../../Static/voiceovers.gif';
import iconoEquipamientoUp from '../../Static/iconoEquipamiento.svg';
//import Heladera from '../../Static/Circulo-Links/video_heladera.mp4';
import '../Contacto/Contacto.css';

const Contacto = () => {
  const [isColapsado, setIsColapsado] = useState(false);

  return (
    <>
      <div className="body-Contacto">
        <div className="CI-EmailMarco Texto-InfoContacto">
          <a rel="noreferrer" href="mailto:hola@hablamarco.com" className="linksContacto">
            <div className="contenedorEmail">
              <span className="texto-Hola">hola</span>
              <span className="texto-email">@hablamarco.com</span>
            </div>
          </a>
        </div>

        <div className="CI-ContactoMarco Texto-InfoContacto">
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5491167485924"
            target="_blank"
            className="linksContacto"
          >
            <span className="texto-numeroDeTel"> +54 9 11 6748 5924</span>
          </a>
        </div>

        <div className="CI-InstagramMarco Texto-InfoContacto">
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
          <div
            className={`contenedor-TextoTecnologia ${
              isColapsado && 'contenedor-TextoTecnologia-Abierto'
            }`}
          >
            <button onClick={() => setIsColapsado(!isColapsado)} className="Texto-Equipamiento">
              Tecnología
              <img
                alt=""
                className={`${isColapsado ? 'iconoEquipamientoDown' : 'iconoEquipamiento'}`}
                src={iconoEquipamientoUp}
              ></img>
            </button>
            <p className={`${!isColapsado ? 'Texto-Tecnologia-Cerrado' : 'Texto-Tecnologia'}`}>
              Antelope Zen Tour synergy core.
              <br />
              Sennheiser mkh 416.
              <br /> Neumann TLM 103.
              <br />
              Mac Mini M1.
            </p>
          </div>
        </div>

        <div className="contenedor-ImgVoiceOvers">
          <img alt="" className="imagenVoiceOvers" src={VoiceOvers}></img>
        </div>
      </div>
    </>
  );
};

export default Contacto;
