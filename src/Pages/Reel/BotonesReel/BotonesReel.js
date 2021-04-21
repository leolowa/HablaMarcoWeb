import React from 'react';
import iconoPause from '../../../Static/iconoPause.svg';
const ReelArg = 'src\Static\Sound\habla-marco-reelArg.mp3';
const ReelLatam = 'src\Static\Sound\habla-marco-reel-latam-2.mp3';

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
                    <i class="bi bi-arrow-down iconoDescarga"></i>
                </a>
            </div>
        </div>
    )
}
