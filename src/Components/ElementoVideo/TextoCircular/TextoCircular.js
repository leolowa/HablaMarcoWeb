import React from 'react';
import './TextoCircular.css';
import videoAUDIBLE from '../../../Static/Video/AUDIBLE_1.mp4';
import videoPARAMOUNT from '../../../Static/Video/Paramount+.mp4';
import videoCOCACOLA from '../../../Static/Video/Coca-Cola.mp4';
import videoDisney from '../../../Static/Video/Disney1.mov';
import videoDiscovery from '../../../Static/Video/FoodNetwork1.mov';
import videoHonda from '../../../Static/Video/HONDA1.mp4';
import videoPantene from '../../../Static/Video/PANTENE1.mp4';
import videoSchweppes from '../../../Static/Video/Schweppes.mp4';
import StellaArtois1 from '../../../Static/Video/StellaArtois1.mp4';

const TextoCircular = ({
  mostrarComercial = () => {
    console.log('Componente no recibió función.');
  },
}) => {
  const funcionLink = e => {
    e.preventDefault();
    alert('Hizo Click');
  };
  return (
    <div className="CP-TextoCircular">
      <svg viewBox="0 0 115 115">
        <path d="M -3,55 a 60,60 1 1,1 0,1 z" id="circle" />
        <text>
          <textPath href="#circle" throwIfNamespace={false}>
            <a href="" onClick={e => mostrarComercial(e)} className="textoLink-Circular">
              &nbsp;&nbsp;&nbsp; GLOOMY AIRS &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoAUDIBLE)}>
              AUDIBLE &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoPantene)}>
              PANTENE &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoDisney)}>
              DISNEY &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e)}>
              ESPN &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoPARAMOUNT)}>
              PARAMOUNT+ &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoCOCACOLA)}>
              COCA-COLA &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoSchweppes)}>
              SCHWEPPES &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoDiscovery)}>
              DISCOVERY NF &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e)}>
              YPF &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, StellaArtois1)}>
              STELLA ARTOIS &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e, videoHonda)}>
              HONDA &nbsp;&nbsp;&nbsp;
            </a>
            <a href="" onClick={e => mostrarComercial(e)}>
              INGRAVIDE
            </a>
          </textPath>
        </text>
      </svg>
    </div>
  );
};
export default TextoCircular;
