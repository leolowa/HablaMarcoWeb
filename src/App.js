import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import Contacto from './Pages/Contacto/Contacto';
import Reel from './Pages/Reel/Reel';
import iconoMenuNegro from './Static/MenuManchaNegro.gif';
import iconoMenuBlanco from './Static/MANCHA-MENU-BLANCA.gif';
import Voces from './Pages/Voces/Voces';

export const App = () => {
  const [iconoMenu, setIconoMenu] = useState(false);
  const abrirMenu = () => {
    const menu = document.querySelector('.Menu');
    menu.style.width = '100%';
  };
  const tipoIconoMenu = tipoIcono => {
    if (tipoIcono === 'blanco') setIconoMenu(true);
    else setIconoMenu(false);
  };

  useEffect(() => {
    const tag = document.querySelector('#iconoBlanco');

    const callback = entries => {
      console.log(entries);
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tipoIconoMenu('blanco');
        } else {
          tipoIconoMenu('negro');
        }
      });
    };
    const options = {
      threshold: [0.3],
    };
    const observer = new IntersectionObserver(callback, options);
    /* tag.forEach(elemento => observer.observe(elemento)); */
    observer.observe(tag);
  });

  return (
    <div id="App">
      <div onClick={() => abrirMenu()} className="contenedorIconoMenu">
        <img className="iconoMenu" alt="" src={iconoMenu ? iconoMenuBlanco : iconoMenuNegro}></img>
      </div>
      <Menu tipoIconoMenu={tipoIconoMenu} />

      <section id="home">
        <Home />
      </section>
      <section className="slideBlanco"></section>

      <section id="work">
        <Voces></Voces>
      </section>
      <section className="slideBlanco"></section>

      <section id="reel">
        <Reel />
      </section>

      <section className="slideBlanco"></section>

      <div id="iconoBlanco" className="CI-SliderNegros">
        <section className="slideNegro"></section>
        <section id="about">
          <About />
        </section>
        <section className="slideNegro"></section>
        <section id="contacto">
          <Contacto />
        </section>
      </div>
      <div className="CI-FraseSutil">
        <p>Esta página pertenece a una persona en construcción</p>
      </div>
    </div>
  );
};
