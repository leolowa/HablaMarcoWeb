import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Work from './Pages/Work/Work';
import About from './Pages/About/About';
import Contacto from './Pages/Contacto/Contacto';
import Reel from './Pages/Reel/Reel';
import iconoMenuNegro from './Static/MenuManchaNegro.gif';
import iconoMenuBlanco from './Static/MANCHA-MENU-BLANCA.gif'


export const App = () => {
    const [iconoMenu, setIconoMenu] = useState(false);

    const abrirMenu = ()=>{
        const menu = document.querySelector(".Menu");
        menu.style.width="100%";
    };

    const tipoIconoMenu =(tipoIcono)=>{
        if(tipoIcono==="blanco")
        setIconoMenu(true);
        else
        setIconoMenu(false);
    };

    return (
        <div id="App">
           
            <div onClick={()=>abrirMenu()} className="contenedorIconoMenu">
                <img className="iconoMenu" alt="" src={iconoMenu?iconoMenuBlanco:iconoMenuNegro}></img>
            </div>
            <Menu tipoIconoMenu={tipoIconoMenu}/> 

            <section id="home"> <Home/> </section>
            <section className="slideBlanco"></section>

            <section id="work"> <Work/> </section>
            <section className="slideBlanco"></section>

            <section id="reel"> <Reel/> </section>
            <section></section>
            
            <section id="about"> <About/> </section>
            <section style={{background:"black"}}></section>

            <section id="contacto"> <Contacto/> </section>

        </div>
    )
}

/* className="animate__animated animate__fadeIn animate__slow" */
