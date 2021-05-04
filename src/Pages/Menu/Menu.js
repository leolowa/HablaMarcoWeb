import React from 'react';
import './Menu.css';
import flechaMenu from '../../Static/flechaMenu.svg';


const Menu = ({tipoIconoMenu}) => {

    function redireccionar(id){
        const menu = document.querySelector('.Menu');
        menu.style.width="0vw";
        const redireccionar = document.querySelector(`#${id}`);
        redireccionar.scrollIntoView();
        console.log(redireccionar.id)
        if((redireccionar.id==='about') || (redireccionar.id==='contacto')){
            tipoIconoMenu('blanco');
        }
        else{
            tipoIconoMenu('negro')
        }
   }

   const cerrarMenu = ()=>{
    const menu = document.querySelector('.Menu');
    menu.style.width="0vw"; 
   };

    return (
                <div className="Menu">
                    <div onClick={()=>cerrarMenu()} className="iconoCerrar">
                         <img alt="" src={flechaMenu}></img>
                    </div>

                    <div className="bodyMenu">

                        <div onClick={()=>redireccionar("home")} >
                            <h1 className="TextoMenu subrayado">HOME</h1>
                        </div>

                        <div onClick={()=>redireccionar("work")}> 
                            <h1 className="TextoMenu subrayado">WORK</h1>
                        </div>

                        <div onClick={()=>redireccionar("reel")} > 
                            <h1 className="TextoMenu subrayado">REEL</h1>
                        </div>

                        <div onClick={()=>redireccionar("about")} > 
                            <h1 className="TextoMenu subrayado">MARCO</h1>
                        </div>

                        <div onClick={()=>redireccionar("contacto")} > 
                            <h1 className="TextoMenu subrayado">CONTACTO</h1>
                        </div>
                        
                    </div>
                </div>
    )
}

export default Menu;
