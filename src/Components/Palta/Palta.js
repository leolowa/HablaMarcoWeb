import React from 'react';
import './Palta.css';

import Palta4 from '../../Static/Palta/4-1-1.png';
import Palta5 from '../../Static/Palta/4-2-2.png';

const Palta = () => {
  return (
    <div class="LP-Palta">
      <div class="CP-Palta">
        <div class="CI-Palta">
          <div class="I-Palta1"></div>
          <div class="I-Palta4">
            <img class="I-imagen-palta-4" src={Palta4} />
          </div>
          <div class="I-Palta5">
            <img class="I-imagen-palta-5" src={Palta5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palta;
