import React from 'react';
import './Palta.css';
import Palta1 from '../../Static/Palta/1.png';
import Palta2 from '../../Static/Palta/2.png';
import Palta3 from '../../Static/Palta/3.png';
import Palta6 from '../../Static/Palta/4.png';
import Palta4 from '../../Static/Palta/4-1-1.png';
import Palta5 from '../../Static/Palta/4-2-2.png';

const Palta = ({isPaltaAbierta = false}) => {
  if (isPaltaAbierta) {
    return (
      <div className="LP-Palta">
        <div className="CP-Palta">
          <div className="CI-Palta">
            <div className="I-Palta1">
              <img className="I-imagenes-palta" src={Palta1} />
              <img className="I-imagenes-palta" src={Palta2} />
              <img className="I-imagenes-palta" src={Palta3} />
              <img className="I-imagenes-palta" src={Palta6} />
            </div>

            <div className="I-Palta4">
              <img className="I-imagen-palta-4" src={Palta4} />
            </div>
            <div className="I-Palta5">
              <img className="I-imagen-palta-5" src={Palta5} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div className="LP-Palta"></div>;
};

export default Palta;
