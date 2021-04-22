import React, { useEffect, useState } from 'react';
import Audible from '../../Static/Circulo-Links/AUDIBLE.svg';
import Avene from '../../Static/Circulo-Links/AVENE.svg';
import CocaCola from '../../Static/Circulo-Links/COCACOLA.svg';
import Disney from '../../Static/Circulo-Links/DISNEY.svg';
import Fanta from '../../Static/Circulo-Links/FANTA.svg';
import Ladysoft from '../../Static/Circulo-Links/LADYSOFT.svg';
import Lays from '../../Static/Circulo-Links/LAYS.svg';
import Sprite from '../../Static/Circulo-Links/SPRITE.svg';
import Honda from '../../Static/Circulo-Links/HONDA.svg';
import Pantene from '../../Static/Circulo-Links/PANTENE.svg';
import manchaWork from '../../Static/Mancha-home1.gif';
import CocaColaVideo from '../../Static/Video/CocaCola.mp4';
import './Work.css';

const Work = () => {
    
    
    
    function mostrarVideo(){
        
        const marcoVideoComercial =document.querySelector('.marcoVideo');
        
        document.querySelector('.contenedorVideosWork').classList.add("aperturaComerciales");;
        document.querySelector('.contenidoVideo').volume = 0.1;
        
        marcoVideoComercial.style.width ="70%";
        marcoVideoComercial.style.height ="70%";
        marcoVideoComercial.style.display ="initial";
        marcoVideoComercial.style.borderradius ="0";
        marcoVideoComercial.classList.add("marcoRectangular");
    };

    const cerrarComerciales = () =>{
        document.querySelector('.contenedorVideosWork').classList.remove("aperturaComerciales");
        document.querySelector('.contenidoVideo').pause();
    };

    
    /* const retornaVideoComercial = (url) => {

        return (
            <video className="contenidoVideo" controls>
                <source type="video/mp4" src={url}></source>
            </video>
        )
    } */

    return (
        <div className="work">
            <div className="contenedorVideosWork">

                <div className="marcoVideo">

                    <video className="contenidoVideo" controls>
                        <source type="video/mp4" src={CocaColaVideo}></source>
                    </video>
                    

    
                </div>
                <button onClick={()=>cerrarComerciales()} className="contenedorCerrarComercialesWork">
                    <i className="bi bi-x iconoCerrarComercialesWork"></i>
                </button>
            </div>
            
            <div className="body-Work">
            
                <div className="contenedorVerMas">
                    <div className="botonMas">
                        <a rel = "noreferrer" href="https://www.youtube.com/channel/UCq9CudVe_LrZR48Ls2wb8LA/videos" target="_blank" className="botonHome">
                            <p className="textoMas">mas</p>
                            <img alt="" className="manchaWork" src={manchaWork}></img>
                        </a>
                    </div>
                </div>
                
                <div className="contenedor-Texto-Work">
                    <h1 className="Texto-Work">WORK</h1>
                </div>

                <div className="contenedor-Links rotar">
                    <div><img id="audible" onClick={(e)=>mostrarVideo(e.target.id)} className="audible cursorLink" alt="#" src={Audible}></img></div>
                    <div><img id="avene" onClick={(e)=>mostrarVideo(e.target.id)} className="avene cursorLink" alt="#" src={Avene}></img></div>
                    <div><img id="cocacola" onClick={(e)=>mostrarVideo(e.target.id)} className="coca cursorLink" alt="#" src={CocaCola}></img></div>
                    <div><img id="disney" onClick={(e)=>mostrarVideo(e.target.id)} className="disney cursorLink" alt="#" src={Disney}></img></div>
                    <div><img id="fanta" onClick={(e)=>mostrarVideo(e.target.id)} className="fanta cursorLink" alt="#" src={Fanta}></img></div>
                    <div><img id="ladysoft" onClick={(e)=>mostrarVideo(e.target.id)} className="ladysoft cursorLink" alt="#" src={Ladysoft}></img></div>
                    <div><img id="lays" onClick={(e)=>mostrarVideo(e.target.id)} className="lays cursorLink" alt="#" src={Lays}></img></div>
                    <div><img id="sprite" onClick={(e)=>mostrarVideo(e.target.id)} className="sprite cursorLink" alt="#" src={Sprite}></img></div>
                    <div><img id="honda" onClick={()=>mostrarVideo()} className="honda cursorLink" alt="#" src={Honda}></img></div>
                    <div><img id="pantene" onClick={(e)=>mostrarVideo(e.target.id)} className="pantene cursorLink" alt="#" src={Pantene}></img></div>
                </div>
            </div>
        </div>
    )
}

export default Work;
