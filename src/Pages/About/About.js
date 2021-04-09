import React, { useState } from 'react';
import { ButtonImg } from '../../Components/ButtonImg';
import './About.css';

const About = () => {
    const [isVersion, setIsVersion] = useState(false);

    return (
        <React.Fragment>
            <div className="body-About">

                <div onClick={()=>setIsVersion(!isVersion)} className="contenedor-LinkBio ">
                    {
                        isVersion
                        ?
                        <h6 className="textoVersion color-Texto">Español</h6>
                        :
                        <h6  className="textoVersion color-Texto">English</h6>
                    }
                    <ButtonImg tipoBoton={"imagenAbout"}/>
                </div>
                {
                isVersion
                ?
                <React.Fragment>
                    <div className="contenedor-Texto">
                        <h5 className="color-Texto Text-Voice">VOICE TALENT</h5>
                        <h1 className="color-Texto TextoLocutor">ANNONCER</h1>
                        <h5 className="color-Texto Texto-Info">Neutral and regional spanish</h5>
                        <h5 className="color-Texto Texto-Info">With background in the music and acting. I am always a corious learner, and am the voice of all kinds of projects. I bring to life:</h5>
                    </div>
            
                    <div className="contenedor-TextoMarco color-Texto">
                        <h1 className="TextoMarco color-Texto">MARCO</h1>
                        <h5 className="color-Texto Texto-Info">
                            Original voices for animated characters<br/>
                            Voices overs for marketing<br/>
                            Voices for in-company material.<br/>
                            Characters for radio shows and alternative platforms.<br/>
                            Sound design or theater plays.<br/>
                            <br/>
                            I make recording for Argentina and the world at large, splitting my time between my home studio and recording studios in Buenos Aires.
                        </h5>
                    </div>
                </React.Fragment>
                :
                <React.Fragment>
                    <div className="contenedor-Texto">
                        <h5 className="color-Texto Text-Voice">VOICE TALENT</h5>
                        <h1 className="color-Texto TextoLocutor">LOCUTOR</h1>
                        <h5 className="color-Texto Texto-Info">Español neutro y Rioplatense</h5>
                        <h5 className="color-Texto Texto-Info">Con formación como actor y músico, y en constante búsqueda, me dedico desde hace 10 años a ponerle la voz a todo tipo de proyectos:</h5>
                    </div>
                
                    <div className="contenedor-TextoMarco">
                        <h1 className="TextoMarco color-Texto">MARCO</h1>
                        <h5 className="color-Texto Texto-Info">
                            Locuciones Comerciales.<br/>
                            Voces originales para personajes animados.<br/>
                            Voces para contenidos institucionales.<br/>
                            Diseño sonoro para obras de teatro.<br/>
                            Personajes para programas de radio y plataformas.<br/>
                            <br/>
                            Reparto mi tiempo entre grabaciones en mi home studio y estudios de Buenos Aires para Argentina y el mundo.
                        </h5>
                    </div>
                    </React.Fragment>
                }
            </div>
            
        </React.Fragment>
    )
}

export default About;
