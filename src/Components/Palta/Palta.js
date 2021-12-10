import React from 'react';
import './Palta.css';
import Palta1 from '../../Static/Palta/1.png';
import Palta2 from '../../Static/Palta/2.png';
import Palta3 from '../../Static/Palta/3.png';
import Palta6 from '../../Static/Palta/4.png';
import Palta4 from '../../Static/Palta/4-1-1.png';
import Palta5 from '../../Static/Palta/4-2-2.png';

const Palta = ({isPaltaAbierta = false}) => {
  return (
    <div className="LP-Palta">
      <div className="CP-Palta">
        <div className="CI-Palta">
          <div className={`${isPaltaAbierta ? 'I-Palta1' : 'I-Palta1Cierre'}`}>
            <img className="I-imagenes-palta" src={Palta1} alt="" />
            <img className="I-imagenes-palta" src={Palta2} alt="" />
            <img className="I-imagenes-palta" src={Palta3} alt="" />
            <img className="I-imagenes-palta" src={Palta6} alt="" />
          </div>

          <div className={`${isPaltaAbierta ? 'I-Palta4' : 'I-Palta4Cierre'}`}>
            <img className="I-imagen-palta-4" src={Palta4} alt="" />
          </div>
          <div className={`${isPaltaAbierta ? 'I-Palta5' : 'I-Palta5Cierre'}`}>
            <img className="I-imagen-palta-5" src={Palta5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palta;
