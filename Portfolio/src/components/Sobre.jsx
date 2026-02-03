import React, { useEffect } from 'react';
import styles from './Sobre.module.css';
import fotoPerfil from '../../imagens/fotoPerfil.jpeg';
import ScrollReveal from 'scrollreveal';

function Sobre() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'ease-out',
        });

        sr.reveal('.reveal-text', { 
            origin: 'left',
            interval: 200,
            reset: true,
        });

        sr.reveal('.reveal-img', { 
            origin: 'right',
            interval: 200,
            reset: true,
        });
    }, []);

    return (
        <div id="Sobre" className={styles.containerSobre}>
            <div className={`${styles.sobreText} reveal-text`}>
                <h2 className={styles.h2Sobre}>Sobre</h2>
                <p className={styles.pSobre}>Olá, sou o João. Enquanto muitos apenas constroem ferramentas, eu me dedico a criar fluxos inteligentes. Hoje, meu trabalho é a ponte entre a criatividade humana e a eficiência da tecnologia, desenvolvendo soluções que não apenas processam dados, mas conversam, aprendem e automatizam o crescimento.
Transformo ideias em sistemas capazes de ouvir e responder, substituindo tarefas repetitivas por processos autônomos que escalam junto com o negócio. Acredito que o futuro do desenvolvimento não é apenas sobre telas e botões, mas sobre criar experiências que economizam tempo e amplificam resultados..</p>
                <hr className={styles.hrSobre} />
            </div>
            <div className={`reveal-img`}>
                <img className={styles.imgSobre} src={fotoPerfil} alt="Foto de perfil" />
            </div>
        </div>
    );
}

export default Sobre;
