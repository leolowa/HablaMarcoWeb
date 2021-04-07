import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Work from './Pages/Work/Work';
import About from './Pages/About/About';
import Contacto from './Pages/Contacto/Contacto';
import Reel from './Pages/Reel/Reel';
import iconoMenu from './Static/MenuFill.svg';

export const App = () => {

    const [posicion, setPosicion] = useState(0);

    const abrirMenu = ()=>{
        const menu = document.querySelector(".Menu");
        console.log(menu)
        menu.style.width="100%";
    };

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
                <img alt="" src={iconoMenu}></img>
            </div>
            <Menu setPosicion={setPosicion}/> 

            <section> <Home/> </section>
                                  
            <section className="animate__animated animate__fadeIn animate__slow"> <Work/> </section>
                 
            <section className="animate__animated animate__fadeIn animate__slow"> <Reel/> </section>
                 
            <section className="animate__animated animate__fadeIn animate__slow"> <About/> </section>

            <section className="animate__animated animate__fadeIn animate__slow"> <Contacto/> </section>
        
            
     </div>
    )
}

{/* <div id="App" >
               {
                   isMenu
                   ?
                    <div onClick={()=>abrirCerrarApp()}>
                        <Menu setIsMenu={setIsMenu} setPosicion={setPosicion}/>
                    </div>
                   :
                   <React.Fragment>
                        <div onClick={()=>abrirCerrarApp()}>
                            <Menu setIsMenu={setIsMenu} setPosicion={setPosicion}/>
                        </div>
                        <section> <Home/> </section>
                        
                        <section></section>
                        
                        <section className="animate__animated animate__fadeIn animate__slow"> <Work/> </section>
                        
                        <section> <Reel/> </section>
                        
                        <section className="transicion2"></section>

                        <section className="animate__animated animate__fadeIn animate__slow"> <About/> </section>

                        <section className="animate__animated animate__fadeIn animate__slow"> <Contacto/> </section>
                    </React.Fragment>
               }
            </div> */}