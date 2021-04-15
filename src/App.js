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

    //const [mostrarSection, setMostrarSection] = useState("");
    
    const [iconoMenu, setIconoMenu] = useState(false);
    const [posicionScrollApp, setPosicionScrollApp] = useState(0);
    const abrirMenu = ()=>{
        const menu = document.querySelector(".Menu");
        menu.style.width="100%";
    };
    const scrollMenu = (posicion)=>{
        window.scrollTo(0,posicion);
    }

    const tipoIconoMenu =(tipoIcono)=>{
        if(tipoIcono==="blanco")
        setIconoMenu(true);
        else
        setIconoMenu(false);
    }


    const eventoScroll =()=>{
        
        window.addEventListener('wheel',(e)=>{
           console.log(e.deltaY)
            
            if(e.deltaY>0){
                window.scroll({
                    top:posicionScrollApp+625,
                    left:0,
                    behavior:"smooth"
                });
                setPosicionScrollApp(posicionScrollApp+625);
            }
            else{
                window.scroll({
                    top:posicionScrollApp-625,
                    left:0,
                    behavior:"smooth"
                });
                setPosicionScrollApp(posicionScrollApp-625);
            }
            /* window.scroll({
                top:posicionScrollApp,
                left:0,
                behavior:"smooth"
            }) */
            /* if(window.scrollY>400){
                window.scroll({
                    top:625,
                    left:0,
                    behavior:'smooth',
                })
                window.scrollTo(0,625)
                setMostrarSection("aparecer")
            } */
            if(window.scrollY>1870){
                setIconoMenu(true)
            }
            else{
                setIconoMenu(false);
            }
        });
    }

    return (
        <div id="App" onScroll={eventoScroll()} >
           
            <div onClick={(e)=>abrirMenu(e)} className="contenedorIcono">
                <img className="iconoMenu" alt="" src={iconoMenu?iconoMenuBlanco:iconoMenuNegro}></img>
            </div>
            <Menu tipoIconoMenu={tipoIconoMenu} scrollMenu={scrollMenu}/> 

            <section> <Home/> </section>
                                  
            <section id="Work" className=""> <Work/> </section>
                 
            <section className="aparecer"> <Reel/> </section>
                 
            <section className="aparecer"> <About/> </section>

            <section className="aparecer"> <Contacto/> </section>
        
            
     </div>
    )
}

/* className="animate__animated animate__fadeIn animate__slow" */