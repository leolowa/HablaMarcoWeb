import React from 'react';
import VoiceOvers from '../../Static/voiceovers.gif';
//import Heladera from '../../Static/Circulo-Links/video_heladera.mp4';
import '../Contacto/Contacto.css';


const Contacto = () => {

    
    return (
        <>
            <div className="body-Contacto">
                <div className="contenedorVideo">
                    {/* <video autoPlay={true} muted>
                        <source type="video/mp4" src={Heladera}></source>
                    </video> */}
                </div>
                <React.Fragment>
                    
                    <div className="contenedor-TextoContacto">
                        <div className="primero"> <h1 className="TextoContacto">CON</h1> </div>
                        <div className="segundo"> <h1 className="TextoContacto">TAC</h1> </div>
                        <div className="tercero"> <h1 className="TextoContacto TextoContactoTercero">TO</h1> </div>
                    </div>
                    <div className="contenedor-Nombre">
                        <h1 className="Nombre">MARCO TIRABOSCHI</h1>
                    </div>

                    <div className="contenedor-InfoContacto">
                        <div className="Texto-InfoContacto"> <h6>hola@hablamarco.com</h6> </div>
                        <div className="Texto-InfoContacto"> <h6>+ 54 9 11 6748 5924</h6> </div>
                        <div className="Texto-InfoContacto"> <h6>instagram.com/habla.marco</h6> </div>
                    </div>

                    <div className="contenedor-VoiceOvers">
                        <div className="contenedor-TextoTecnologia">
                            <h6 className="Texto-InfoContacto right">Tecnología</h6>
                            <p className="Texto-Tecnologia">
                                Antelope Zen Tour synergy core.<br/> 
                                Sennheiser mkh 416.<br/> Neumann TLM 103.<br/> 
                                MacBook Air M1.
                            </p>
                        </div>
                        
                        <div className="contenedor-ImgVoiceOvers">
                            <img alt="" className="imagenVoiceOvers" src={VoiceOvers}></img>
                        </div>
                        
                    </div>
                </React.Fragment>
                
            </div>
        </>
    )
}

export default Contacto;