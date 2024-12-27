import './App.css';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Contato from './components/Contato';
import Formacao from './components/Formacao';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 500,
      easing: 'ease-out',
      reset: true, 
    });

    sr.reveal('.reveal', {
      interval: 200,
      reset: true,
    });

    sr.reveal('.reveal-bottom', {
      origin: 'bottom',
      interval: 200,
    });

    sr.reveal('.reveal-left', {
      origin: 'left',
      interval: 200,
    });

    sr.reveal('.reveal-right', {
      origin: 'right',
      interval: 200,
    });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Sobre />
      <Formacao />
      <Habilidades />
      <Servicos />
      <Projetos />
      <Contato />
    </>
  );
}

export default App;
