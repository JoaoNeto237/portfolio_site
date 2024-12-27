import React, { useEffect } from 'react';
import styles from './Home.module.css';
import home from '../../imagens/home.avif';
import ScrollReveal from 'scrollreveal';

function Home() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'ease-out',
        });

        sr.reveal('.reveal', { 
            scale: 0.8,
            interval: 300,
        });
    }, []);

    return (
        <div id="Home" className={`${styles.divHome} reveal`}>
            <div>
                <h1 className={styles.h1Home}>Transformando ideias em soluções digitais completas</h1>
                <div className={styles.divP}>
                    <p className={styles.pHome}>João Cunha / Desenvolvedor Full-stack</p>
                </div>
            </div>
            <div>
                <img className={styles.imgHome} src={home} alt="Imagem representando engenharia de software" />
            </div>
        </div>
    );
}

export default Home;
