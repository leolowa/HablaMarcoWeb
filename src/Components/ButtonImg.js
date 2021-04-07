import React from 'react';
import './ButtonImg.css';

export const ButtonImg = ({onClick, tipoBoton}) => {
    return (
        <React.Fragment>
            <button onClick={onClick} className={`botonImg ${tipoBoton}`}></button>
        </React.Fragment>
    )
}
