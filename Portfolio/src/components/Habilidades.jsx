import React, { useEffect } from 'react';
import styles from './Habilidades.module.css';
import css3 from '../../imagens/css3.png';
import html5 from '../../imagens/html5.png';
import tailwind from '../../imagens/tailwind.png';
import js3 from '../../imagens/js3.webp';
import python5 from '../../imagens/python5.png';
import sql from '../../imagens/sql.webp';
import git from '../../imagens/git.webp';
import firebase from '../../imagens/firebase.webp';
import nodejs from '../../imagens/nodejs.png';
import reactnative from '../../imagens/reactnative.svg';
import reactjs from '../../imagens/reactjs.png';
import mongodb from '../../imagens/mongodb.png';
import ScrollReveal from 'scrollreveal';

function Habilidades() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 500,
      easing: 'ease-out',
    });

    sr.reveal('.reveal', {
      origin: 'bottom',
      interval: 100,
    });
  }, []);

  return (
    <div id="Habilidades" className={styles.containerHabilidades}>
      <h2 className={`${styles.h2Habilidades} reveal`}>Habilidades</h2>
      <div className={styles.divImgHabilidades}>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={html5} alt="Logo HTML5" />
          <p className={styles.nomeHabilidade}>HTML5</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={css3} alt="Logo CSS3" />
          <p className={styles.nomeHabilidade}>CSS3</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={js3} alt="Logo JavaScript" />
          <p className={styles.nomeHabilidade}>JavaScript</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={python5} alt="Logo Python" />
          <p className={styles.nomeHabilidade}>Python</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={sql} alt="Logo SQL" />
          <p className={styles.nomeHabilidade}>MySQL</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={git} alt="Logo Git" />
          <p className={styles.nomeHabilidade}>Git</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={tailwind} alt="Logo Tailwind" />
          <p className={styles.nomeHabilidade}>Tailwind</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={firebase} alt="Logo Firebase" />
          <p className={styles.nomeHabilidade}>Firebase</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={nodejs} alt="Logo Node.js" />
          <p className={styles.nomeHabilidade}>Node.js</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={reactnative} alt="Logo React Native" />
          <p className={styles.nomeHabilidade}>React Native</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={mongodb} alt="Logo MongoDB" />
          <p className={styles.nomeHabilidade}>MongoDB</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={reactjs} alt="Logo React.js" />
          <p className={styles.nomeHabilidade}>React.js</p>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
