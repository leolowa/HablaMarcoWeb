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
    const [posicionAnteriorScrollApp, setPosicionAnteriorScrollApp] = useState(0);
    const [posicionActualScrollApp, setPosicionActualScrollApp] = useState(0);
    const [direccionScroll, setDireccionScroll] = useState('');

    const abrirMenu = ()=>{
        const menu = document.querySelector(".Menu");
        menu.style.width="100%";
    };
    const scrollMenu = (posicion)=>{
        window.scrollTo(0,posicion);
        /* window.scroll({
            top:posicion,
            left:0,
            behavior:"smooth",
        }); */
    }
    const tipoIconoMenu =(tipoIcono)=>{
        if(tipoIcono==="blanco")
        setIconoMenu(true);
        else
        setIconoMenu(false);
    }


    const eventoScroll =(e)=>{

        console.log(e.pageYOffset)
        if(window.scrollY>1600)
            setIconoMenu(true);
        else
            setIconoMenu(false);

        //Navegación de página//
        /* if(e.deltaY < 0){
   
            if(direccionScroll !== 'up'){
               console.log("up")
                setDireccionScroll('up');
                window.scroll({
                    top:posicionActualScrollApp-625,
                    left:0,
                    behavior:"smooth",
                });
                setPosicionActualScrollApp(posicionActualScrollApp-625);
            }

        }
        else{

            if(direccionScroll !== 'down'){
                console.log("down")
                setDireccionScroll('down');
                window.scroll({
                    top:posicionActualScrollApp+625,
                    left:0,
                    behavior:"smooth",
                });
                setPosicionActualScrollApp(posicionActualScrollApp+625);
            } 

        } */
    }

    
    

    return (
        <div id="App" onWheel={(e)=>eventoScroll(e)} >
           
            <div onClick={(e)=>abrirMenu(e)} className="contenedorIcono">
                <img className="iconoMenu" alt="" src={iconoMenu?iconoMenuBlanco:iconoMenuNegro}></img>
            </div>
            <Menu tipoIconoMenu={tipoIconoMenu} scrollMenu={scrollMenu}/> 

            <section> <Home/> </section>
                                  
            <section id="Work"> <Work/> </section>
                 
            <section> <Reel/> </section>
                 
            <section> <About/> </section>

            <section> <Contacto/> </section>

        </div>
    )
}

/* className="animate__animated animate__fadeIn animate__slow" */
