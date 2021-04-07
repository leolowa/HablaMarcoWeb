import React from 'react';
import './Reel.css';
import './BotonesReel/BotonesReel.css';
import { BotonesReel } from './BotonesReel/BotonesReel';

const Reel = () => {
    const reproducirReel =()=>{
     const element= document.querySelector('#playReel').classList.add("playReel");
    }

    return (
        <React.Fragment>
            <div className="contenedorReel animate__animated animate__fadeIn animate__slow">

                <div className="contenedorVideoReel">
                    <h1 id="playReel" className="textoReel">REEL</h1>
                </div>
                
                <div className="contenedorBotonesReel">
                    <BotonesReel onPlay={reproducirReel} TextoReel="REEL LATAM"/>
                    <BotonesReel onPlay={reproducirReel} TextoReel="REEL ARG"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Reel;
