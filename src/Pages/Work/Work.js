import React, { useState } from 'react';
import Audible from '../../Static/Circulo-Links/AUDIBLE.svg';
//import AudibleVideo from '../../Static/Video/AudibleEEUUSpanish.mp4'
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
import './Work.css';

const Work = () => {
    
    const [videoSeleccionado, setVideoSeleccionado] = useState("");
    
    
    function mostrarVideo(id){
        switch(id){
            case "Audible":{setVideoSeleccionado(/* AudibleVideo */);}
        } 

        document.querySelector('.contenedorVideosWork').classList.add("aperturaComerciales");;
        document.querySelector('.contenidoVideo').volume = 0.1;
        //document.querySelector('.contenidoVideo').classList.add("animate__animated", "animate__fadeIn", "animate__slow", "animate__delay-2s");
        setTimeout(()=>{
            document.querySelector('.marcoVideo').style.width ="70%";
            document.querySelector('.marcoVideo').style.height ="70%";
            document.querySelector('.marcoVideo').style.display ="initial";
            document.querySelector('.marcoVideo').style.borderradius ="0";
            document.querySelector('.marcoVideo').classList.add("marcoRectangular");
        },2000);
    };

    const cerrarComerciales = () =>{
        document.querySelector('.contenedorVideosWork').classList.remove("aperturaComerciales");
    };

    return (
        <div className="work">
            <div className="contenedorVideosWork">

                <div className="marcoVideo">

                    {/* <video className="contenidoVideo" controls  muted>
                        <source type="video/mp4" src={AudibleVideo}></source>
                    </video> */}
    
                </div>
                <button onClick={()=>cerrarComerciales()} className="contenedorCerrarComercialesWork">
                    <i className="bi bi-x iconoCerrarComercialesWork"></i>
                </button>
            </div>
            
            <div className="body-Work">
            
                <div className="contenedorVerMas">
                    <div className="botonMas">
                        <a href="https://www.youtube.com/channel/UCq9CudVe_LrZR48Ls2wb8LA/videos" target="_blank" className="botonHome">
                            <p className="textoMas">mas</p>
                            <img alt="" className="manchaWork" src={manchaWork}></img>
                        </a>
                    </div>
                </div>
                
                <div className="contenedor-Texto-Work">
                    <h1 className="Texto-Work">WORK</h1>
                </div>

                <div className="contenedor-Links rotar">
                    <div><img id="Audible" onClick={(e)=>mostrarVideo(e.target.id)} className="audible cursorLink" alt="#" src={Audible}></img></div>
                    <div><img onClick={(e)=>mostrarVideo(e)} className="avene cursorLink" alt="#" src={Avene}></img></div>
                    <div><img id="CocaCola" onClick={(e)=>mostrarVideo(e)} className="coca cursorLink" alt="#" src={CocaCola}></img></div>
                    <div><img onClick={()=>mostrarVideo()} className="disney cursorLink" alt="#" src={Disney}></img></div>
                    <div><img onClick={()=>mostrarVideo()} className="fanta cursorLink" alt="#" src={Fanta}></img></div>
                    <div><img onClick={()=>mostrarVideo()} className="ladysoft cursorLink" alt="#" src={Ladysoft}></img></div>
                    <div><img onClick={()=>mostrarVideo()} className="lays cursorLink" alt="#" src={Lays}></img></div>
                    <div><img onClick={()=>mostrarVideo()} className="sprite cursorLink" alt="#" src={Sprite}></img></div>
                    <div><img onClick={()=>mostrarVideo()} className="honda cursorLink" alt="#" src={Honda}></img></div>
                    <div><img onClick={()=>mostrarVideo()} className="pantene cursorLink" alt="#" src={Pantene}></img></div>
                </div>
            </div>
        </div>
    )
}

export default Work;
