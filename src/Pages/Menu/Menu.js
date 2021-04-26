import React from 'react';
import './Menu.css';
import flechaMenu from '../../Static/flechaMenu.svg';


const Menu = ({scrollMenu, tipoIconoMenu}) => {

    function redireccionar(pos){
        const menu = document.querySelector('.Menu');
        menu.style.width="0vw";
        scrollMenu(pos)
        if(pos>=3750){
            tipoIconoMenu("blanco");
        }
        else{
            tipoIconoMenu("menu Negro");
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

                        <div onClick={()=>redireccionar(0)} >
                            <h1 className="TextoMenu subrayado">HOME</h1>
                        </div>

                        <div onClick={()=>redireccionar(1258)}> 
                            <h1 className="TextoMenu subrayado">WORK</h1>
                        </div>

                        <div onClick={()=>redireccionar(2516)} > 
                            <h1 className="TextoMenu subrayado">REEL</h1>
                        </div>

                        <div onClick={()=>redireccionar(3774)} > 
                            <h1 className="TextoMenu subrayado">MARCO</h1>
                        </div>

                        <div onClick={()=>redireccionar(5032)} > 
                            <h1 className="TextoMenu subrayado">CONTACTO</h1>
                        </div>
                        
                    </div>
                </div>
    )
}

export default Menu;
