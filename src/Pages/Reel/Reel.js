import React, { useState } from 'react';
import './Reel.css';
import './BotonesReel/BotonesReel.css';
import videoPerro from '../../Static/Video/Baile_perro_fondo_blanco.mp4';
import reelLatam from '../../Static/Sound/habla-marco-reel-latam-2.mp3';
import reelArg from '../../Static/Sound/habla-marco-reelArg.mp3';
import { BotonesReel } from './BotonesReel/BotonesReel';
import ElementoVideo from '../../Components/ElementoVideo/ElementoVideo';

const Reel = () => {

    const [isPlayReel, setIsPlayReel] = useState(false);
    const [isReelLatam, setIsReelLatam] = useState(false);
    const [isReelArg, setIsReelArg] = useState(false);
    
    const reproducirReel =(idReel)=>{
        const element= document.querySelector('#playReel')
        const elementoVideo = document.querySelector('#videoReel');
        if(idReel==="Latam"){   
            const elementoAudio=document.querySelector('#audioLatam');

            if(isPlayReel !== true){
                element.classList.add("playReel");
                elementoVideo.style.opacity="1";
                elementoVideo.play();
                elementoAudio.play();
                setIsReelLatam(true);
                setIsPlayReel(true);
            }
            else{
                setIsReelLatam(false);
                elementoAudio.pause()
                element.classList.remove("playReel");
                elementoVideo.style.opacity="0";
                elementoVideo.pause();
                setIsPlayReel(false);
            }
        }

        if(idReel==="Arg"){
            const elementoAudio=document.querySelector('#audioArg');
            if(isPlayReel !== true){
                element.classList.add("playReel");
                setIsReelArg(true)
                elementoAudio.play();
                elementoVideo.style.opacity="1";
                elementoVideo.play();
                element.classList.add("playReel");
                setIsPlayReel(true);
            }
            else{
                setIsReelArg(false)
                elementoAudio.pause()
                element.classList.remove("playReel");
                elementoVideo.style.opacity="0";
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
    const finalizacionAudio = (idReel) =>{
        if(idReel==="Latam"){
            setIsReelLatam(false);
        }
        else{
            setIsReelArg(false);
        }
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
                    <BotonesReel isDisabled={isReelArg} isPaused={isReelLatam} onPlay={()=>reproducirReel("Latam")} TextoReel="REEL LATAM" tipoReel="ReelLatam"/>
                    <BotonesReel isDisabled={isReelLatam} isPaused={isReelArg}  onPlay={()=>reproducirReel("Arg")} TextoReel="REEL ARG" tipoReel="ReelArg"/>
                </div>
                <audio onPause={()=>finalizacionAudio("Latam")} id="audioLatam" src={`${reelLatam}#t=0,28`}></audio>
                <audio onPause={()=>finalizacionAudio("Arg")} id="audioArg" src={`${reelArg}#t=0,28`}></audio>
            </div>
        </React.Fragment>
    )
}

export default Reel;
