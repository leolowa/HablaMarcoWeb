import React, { useState } from 'react';
import VoiceOvers from '../../Static/voiceovers.gif';
import iconoEquipamientoUp from '../../Static/iconoEquipamiento.svg';
import iconoEquipamientoDown from '../../Static/iconoEquipamientoDown.svg';

//import Heladera from '../../Static/Circulo-Links/video_heladera.mp4';
import '../Contacto/Contacto.css';


const Contacto = () => {
    const [isColapsado, setIsColapsado] = useState(false);

    const mostrarTecnología = () =>{
        if(isColapsado!==true){
            const elementoColapsable = document.querySelector(".contenedor-TextoTecnologia");
            elementoColapsable.style.maxHeight= elementoColapsable.scrollHeight + "px";
            setIsColapsado(true);
        }
        else{
            const elementoColapsable = document.querySelector(".contenedor-TextoTecnologia");
            elementoColapsable.style.maxHeight="0";
            setIsColapsado(false);
        }
    }
    return (
        <>
            <div className="body-Contacto">
                
                    
                    <div className="contenedor-TextoContacto">
                        <div className="primero"> <h1 className="TextoContacto">CONTACTO</h1></div>
                    </div>

                    <div className="contenedor-InfoContacto">
                        <div className="Texto-InfoContacto"> <h6>hola@hablamarco.com</h6> </div>
                        <div className="Texto-InfoContacto"> <h6>+ 54 9 11 6748 5924</h6> </div>
                        <div className="Texto-InfoContacto"> <h6>instagram.com/habla.marco</h6> </div>
                    </div>

                    
                    <div className="contenedorEquipamiento">
                        <button onClick={()=>mostrarTecnología()} className="Texto-Equipamiento">Equipamiento
                            {
                                isColapsado
                                ?
                                    <img alt="" className="iconoEquipamientoDown" src={iconoEquipamientoDown}></img>
                                :
                                    <img alt="" className="iconoEquipamiento" src={iconoEquipamientoUp}></img>
                            }
                        </button>
                        <div className="contenedor-TextoTecnologia">
                            <p className="Texto-Tecnologia">
                                Antelope Zen Tour synergy core.<br/> 
                                Sennheiser mkh 416.<br/> Neumann TLM 103.<br/> 
                                MacBook Air M1.
                            </p>
                        </div>
                    </div>

                    <div className="contenedor-ImgVoiceOvers">
                            <img alt="" className="imagenVoiceOvers" src={VoiceOvers}></img>
                    </div>
                
            </div>
        </>
    )
}

export default Contacto;