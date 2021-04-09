import React, { useEffect, useState } from 'react';
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

    const [posicion, setPosicion] = useState(0);
    const [iconoMenu, setIconoMenu] = useState(false)

    const abrirMenu = ()=>{
        const menu = document.querySelector(".Menu");
        menu.style.width="100%";
    };

    const tipoIconoMenu =(tipoIcono)=>{
        if(tipoIcono==="blanco")
        setIconoMenu(true);
        else
        setIconoMenu(false);
    }

   useEffect(() => {
    window.scrollTo(0,posicion);
    /* window.scroll({
        top: posicion,
        left: 0,
        duration: 2000,
        behavior: 'smooth'
      }); */
}, [posicion]);

    return (
        <div id="App" >
           
            <div onClick={()=>abrirMenu()} className="contenedorIcono">
                <img className="iconoMenu" alt="" src={iconoMenu?iconoMenuBlanco:iconoMenuNegro}></img>
            </div>
            <Menu tipoIconoMenu={tipoIconoMenu} setPosicion={setPosicion}/> 

            <section> <Home/> </section>
                                  
            <section className="animate__animated animate__fadeIn animate__slow"> <Work/> </section>
                 
            <section className="animate__animated animate__fadeIn animate__slow"> <Reel/> </section>
                 
            <section className="animate__animated animate__fadeIn animate__slow"> <About/> </section>

            <section className="animate__animated animate__fadeIn animate__slow"> <Contacto/> </section>
        
            
     </div>
    )
}