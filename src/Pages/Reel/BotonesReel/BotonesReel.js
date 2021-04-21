import React from 'react';
import iconoPause from '../../../Static/iconoPause.svg';

export const BotonesReel = ({onPlay, TextoReel="Reel", isPaused=false, tipoReel=''}) => {
    
    return (
        <div className="contenedorSubReel">
            <button onClick={onPlay} className="botonReelPlay">
                {
                    isPaused
                    ?
                    <img alt='' src={iconoPause} className="iconoReel"></img>
                    :
                    <i className="bi bi-play iconoReel"></i>
                }
            </button>

            <div className="reelDescarga">
                <h6 className="Texto-Reel">{TextoReel}</h6>
                <a href={tipoReel} download="Reel"  className="botonReelPlay">
                    <i className="bi bi-arrow-down iconoDescarga"></i>
                </a>
            </div>
        </div>
    )
}
