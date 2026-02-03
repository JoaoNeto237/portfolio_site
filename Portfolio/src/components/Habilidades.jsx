import React, { useEffect } from 'react';
import styles from './Habilidades.module.css';
import css3 from '../../imagens/css3.png';
import html5 from '../../imagens/html5.png';
import tailwind from '../../imagens/tailwind.png';
import js3 from '../../imagens/js3.webp';
import python5 from '../../imagens/python5.png';
import sql from '../../imagens/sql.webp';
import git from '../../imagens/git.webp';
import nodejs from '../../imagens/nodejs.png';
import reactnative from '../../imagens/reactnative.svg';
import reactjs from '../../imagens/reactjs.png';
import mongodb from '../../imagens/mongodb.png';
import ScrollReveal from 'scrollreveal';
import n8n from '../../imagens/n8n.png';
import supabase from '../../imagens/supabase.jpg';
import aws from '../../imagens/aws.webp';
import lovable from '../../imagens/lovable.jpeg';
import postgres from '../../imagens/postgres.jpg';
import vapi from '../../imagens/vapi.png'; 
import elevenlabs from '../../imagens/elevenlabs2.png';
import docker from '../../imagens/docker.jpeg';

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
        
        {/* LINGUAGENS E FRAMEWORKS */}
        <div className="reveal">
          <img className={styles.imgHabilidades} src={python5} alt="Logo Python" />
          <p className={styles.nomeHabilidade}>Python</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={nodejs} alt="Logo Node.js" />
          <p className={styles.nomeHabilidade}>Node.js</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={reactjs} alt="Logo React.js" />
          <p className={styles.nomeHabilidade}>React.js</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={reactnative} alt="Logo React Native" />
          <p className={styles.nomeHabilidade}>React Native</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={js3} alt="Logo JavaScript" />
          <p className={styles.nomeHabilidade}>JavaScript</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={tailwind} alt="Logo Tailwind CSS" />
          <p className={styles.nomeHabilidade}>Tailwind CSS</p>
        </div>

        {/* BANCOS DE DADOS */}
        <div className="reveal">
          <img className={styles.imgHabilidades} src={postgres} alt="Logo PostgreSQL" />
          <p className={styles.nomeHabilidade}>PostgreSQL</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={sql} alt="Logo MySQL" />
          <p className={styles.nomeHabilidade}>MySQL</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={mongodb} alt="Logo MongoDB" />
          <p className={styles.nomeHabilidade}>MongoDB</p>
        </div>

        {/* FERRAMENTAS E IA */}
        <div className="reveal">
          <img className={styles.imgHabilidades} src={vapi} alt="Logo Vapi" />
          <p className={styles.nomeHabilidade}>Vapi</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={elevenlabs} alt="Logo ElevenLabs" />
          <p className={styles.nomeHabilidade}>ElevenLabs</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={n8n} alt="Logo N8N" />
          <p className={styles.nomeHabilidade}>N8N</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={lovable} alt="Logo Lovable" />
          <p className={styles.nomeHabilidade}>Lovable</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={git} alt="Logo Git" />
          <p className={styles.nomeHabilidade}>Git</p>
        </div>

        {/* CLOUD E INFRAESTRUTURA */}
        <div className="reveal">
          <img className={styles.imgHabilidades} src={aws} alt="Logo AWS" />
          <p className={styles.nomeHabilidade}>AWS</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={docker} alt="Logo Docker" />
          <p className={styles.nomeHabilidade}>Docker</p>
        </div>
        <div className="reveal">
          <img className={styles.imgHabilidades} src={supabase} alt="Logo Supabase" />
          <p className={styles.nomeHabilidade}>Supabase</p>
        </div>

      </div>
    </div>
  );
}

export default Habilidades;