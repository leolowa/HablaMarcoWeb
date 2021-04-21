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

    const scrollMenu = (posicion)=>{
        window.scrollTo(0,posicion);
    };

    const tipoIconoMenu =(tipoIcono)=>{
        if(tipoIcono==="blanco")
        setIconoMenu(true);
        else
        setIconoMenu(false);
    };


    const eventoScroll =()=>{
        if(window.scrollY>3600)
            setIconoMenu(true);
        else
            setIconoMenu(false);
    };

    
    

    return (
        <div id="App" onWheel={(e)=>eventoScroll(e)} >
           
            <div onClick={()=>abrirMenu()} className="contenedorIcono">
                <img className="iconoMenu" alt="" src={iconoMenu?iconoMenuBlanco:iconoMenuNegro}></img>
            </div>
            <Menu tipoIconoMenu={tipoIconoMenu} scrollMenu={scrollMenu}/> 

            <section> <Home/> </section>
            <section></section>

            <section id="Work"> <Work/> </section>
            <section></section>

            <section> <Reel/> </section>
            <section></section>
            
            <section> <About/> </section>
            <section style={{background:"black"}}></section>

            <section> <Contacto/> </section>

        </div>
    )
}

/* className="animate__animated animate__fadeIn animate__slow" */
