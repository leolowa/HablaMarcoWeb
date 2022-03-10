import React from 'react';
import './TextoCircular.css';

const TextoCircular = ({
  mostrarComercial = () => {
    console.log('Componente no recibió función.');
  },
}) => {
  return (
    <div className="CP-TextoCircular">
      <svg viewBox="0 0 115 115">
        <path d="M -3,55 a 60,60 1 1,1 0,1 z" id="circle" />
        <text>
          <textPath href="#circle">
            <tspan className="tSpan" onClick={() => mostrarComercial('Ford')}>
              &nbsp;&nbsp;&nbsp; FORD &nbsp;&nbsp;&nbsp;
            </tspan>
            <tspan onClick={() => mostrarComercial('Audible')}>AUDIBLE &nbsp;&nbsp;&nbsp;</tspan>
            <tspan onClick={() => mostrarComercial('Pantene')}>PANTENE &nbsp;&nbsp;&nbsp;</tspan>
            <tspan onClick={() => mostrarComercial('Disney')}>DISNEY &nbsp;&nbsp;&nbsp;</tspan>
            <tspan onClick={() => mostrarComercial('Espn')}>ESPN &nbsp;&nbsp;&nbsp;</tspan>
            <tspan onClick={() => mostrarComercial('Paramount+')}>
              PARAMOUNT+ &nbsp;&nbsp;&nbsp;
            </tspan>
            <tspan onClick={() => mostrarComercial('Coca Cola')}>
              COCA-COLA &nbsp;&nbsp;&nbsp;
            </tspan>
            <tspan onClick={() => mostrarComercial('Schweppes')}>
              SCHWEPPES &nbsp;&nbsp;&nbsp;
            </tspan>
            <tspan onClick={() => mostrarComercial('Discovery NF')}>
              DISCOVERY NF &nbsp;&nbsp;&nbsp;
            </tspan>
            <tspan onClick={() => mostrarComercial('YPF')}>YPF &nbsp;&nbsp;&nbsp;</tspan>
            <tspan onClick={() => mostrarComercial('Stella Artois')}>
              STELLA ARTOIS &nbsp;&nbsp;&nbsp;
            </tspan>
            <tspan onClick={() => mostrarComercial('Honda')}>HONDA &nbsp;&nbsp;&nbsp;</tspan>
            <tspan onClick={() => mostrarComercial('Ingravido')}>INGRAVIDO</tspan>
          </textPath>
        </text>
      </svg>
    </div>
  );
};
export default TextoCircular;
