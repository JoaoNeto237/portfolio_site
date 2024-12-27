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
                <p className={styles.pSobre}>Olá! Sou João Cunha, desenvolvedor full-stack com sólida experiência na criação de aplicações web completas e eficientes. Tenho um perfil orientado a resultados, oferecendo soluções escaláveis, de alta performance e qualidade técnica. Meu trabalho combina expertise em frontend moderno, garantindo interfaces intuitivas e atraentes, com um backend robusto e bem estruturado, capaz de atender às demandas mais desafiadoras. Sou apaixonado por transformar ideias em produtos digitais que geram valor e impacto positivo para negócios e usuários.</p>
                <hr className={styles.hrSobre} />
            </div>
            <div className={`reveal-img`}>
                <img className={styles.imgSobre} src={fotoPerfil} alt="Foto de perfil" />
            </div>
        </div>
    );
}

export default Sobre;
