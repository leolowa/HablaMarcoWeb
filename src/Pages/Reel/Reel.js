import React, { useState } from 'react';
import './Reel.css';
import './BotonesReel/BotonesReel.css';
import videoPerro from '../../Static/Video/Baile_con_perro_sobre_fondo_blanco.mov';
import reelLatam from '../../Static/Sound/habla-marco-reel-latam-2.mp3';
import reelArg from '../../Static/Sound/habla-marco-reelArg.mp3';
import { BotonesReel } from './BotonesReel/BotonesReel';
import ElementoVideo from '../../Components/ElementoVideo/ElementoVideo';

const Reel = () => {

    const [isPlayReel, setIsPlayReel] = useState(false);
    const [elementoVideo, setElementoVideo] = useState();
    let audioLatam = new Audio(reelLatam);
    
    audioLatam.onpause = function(){
        console.log("onPaused");
    };
    audioLatam.onplay = function(){
        console.log("onPlay")
    };

    let audioArg = new Audio(reelArg);

    const reproducirReel =(idReel)=>{

        const element= document.querySelector('#playReel')
        const elementoVideo = document.querySelector('#videoReel');

        if(idReel==="Latam"){
            if(isPlayReel !== true){
                audioLatam.play();
                
                elementoVideo.style.opacity="1";
                elementoVideo.play();
                element.classList.add("playReel");
                setIsPlayReel(true);
            }
            else{
                
                audioLatam.pause();
                //console.log(audioLatam.pause())
                element.classList.remove("playReel");
                elementoVideo.pause();
                setIsPlayReel(false);
            }
        }

        if(idReel==="Arg"){
            if(isPlayReel !== true){
                audioArg.play();
                
                elementoVideo.style.opacity="1";
                elementoVideo.play();
                element.classList.add("playReel");
                setIsPlayReel(true);
            }
            else{
                audioArg.pause();

                element.classList.remove("playReel");
                elementoVideo.pause();
                setIsPlayReel(false);
            }
        }

        
    }
    
    const finalizacionVideo = () =>{
        const elementoVideo = document.querySelector('#videoReel');
        const element= document.querySelector('#playReel');

        element.classList.remove("playReel");
        elementoVideo.style.opacity="0";
        setIsPlayReel(false);
    }
    return (
        <React.Fragment>
            <div className="contenedorReel">
                <ElementoVideo
                        id="videoReel"
                        estilosReproductorVideo="estilosVideoReel"
                        isLoop={false}
                        isAutoPlay={false} 
                        url={`${videoPerro}`}
                        onEnded={()=>{finalizacionVideo()}}
                />
                <h1 id="playReel" className="textoReel">REEL</h1>
                <div className="contenedorBotonesReel">
                    <BotonesReel isPaused={isPlayReel} onPlay={()=>reproducirReel("Latam")} TextoReel="REEL LATAM" tipoReel="ReelLatam"/>
                    <BotonesReel isPaused={false}  onPlay={()=>reproducirReel("Arg")} TextoReel="REEL ARG" tipoReel="ReelArg"/>
                </div>
                {/* <audio id="audio" src={`${audioSeleccionado}#t=0,30`}></audio> */}
            </div>
        </React.Fragment>
    )
}

export default Reel;
