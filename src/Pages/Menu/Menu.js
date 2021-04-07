import React, { useState } from 'react';
import './Menu.css';
import flechaMenu from '../../Static/flechaMenu.svg';


const Menu = ({setPosicion}) => {

    const [isOpen, setIsOpen] = useState(false);

    function redireccionar(pos){
        const menu = document.querySelector('.Menu');
        setPosicion(pos);
        menu.style.width="0vw";

   }

   const cerrarMenu = ()=>{
    const menu = document.querySelector('.Menu');
    console.log(menu)
    menu.style.width="0vw"; 
   };

    return (
                <div className="Menu">

                    <div onClick={()=>cerrarMenu()} className="iconoCerrar">
                         <img alt="" src={flechaMenu}></img>
                    </div>

                    <div className="bodyMenu">

                        <div onClick={()=>redireccionar(0)} >
                            <h1 className="TextoMenu subrayado">HOME</h1>
                        </div>

                        <div onClick={()=>redireccionar(625)}> 
                            <h1 className="TextoMenu subrayado">WORK</h1>
                        </div>

                        <div onClick={()=>redireccionar(1250)} > 
                            <h1 className="TextoMenu subrayado">REEL</h1>
                        </div>

                        <div onClick={()=>redireccionar(1875)} > 
                            <h1 className="TextoMenu subrayado">MARCO</h1>
                        </div>

                        <div onClick={()=>redireccionar(2500)} > 
                            <h1 className="TextoMenu subrayado">CONTACTO</h1>
                        </div>
                        
                    </div>
                    

                </div>
    )
}

export default Menu;
