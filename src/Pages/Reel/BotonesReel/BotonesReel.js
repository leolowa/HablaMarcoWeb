import React from 'react';
import iconoPause from '../../../Static/iconoPause.svg';
import reelLatam from '../../../Static/Sound/habla-marco-reel-latam-2.mp3';
import reelArg from '../../../Static/Sound/habla-marco-reelArg.mp3';



export const BotonesReel = ({onPlay, TextoReel="Reel", isPaused=false, tipoReel=''}) => {
    const   descargarArchivoReel =  (tipo) =>{
        if(tipo !== 'ReelLatam'){
            return reelLatam;}
        else{ return reelArg}
    }
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
                <a href={tipoReel} download={descargarArchivoReel(tipoReel)}  className="botonReelPlay">
                    <i className="bi bi-arrow-down iconoDescarga"></i>
                </a>
            </div>
        </div>
    )
}
