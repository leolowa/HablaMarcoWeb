import React from 'react'

export const BotonesReel = ({onPlay,TextoReel="Reel"}) => {
    return (
        <div className="contenedorSubReel">
            <button onClick={onPlay} className="botonReelPlay">
                <i className="bi bi-play  iconoReel"></i>
            </button>

            <div className="reelDescarga">
                <i className="bi bi-arrow-down-circle iconoDescarga"></i>
                <h6 className="Texto-Reel">{TextoReel}</h6>
            </div>
        </div>
    )
}
