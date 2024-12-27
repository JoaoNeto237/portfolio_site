import React, { useEffect } from 'react';
import styles from './Formacao.module.css';
import formacao3 from '../../imagens/formacao3.avif';
import ScrollReveal from 'scrollreveal';

function Formacao() {

  const baixarCv = () =>{
    const link = document.createElement('a');
    link.href = 'curriculoFullStack.pdf';
    link.download = 'curriculoFullStack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
    });

    sr.reveal('.reveal-text', {
      origin: 'left',
      interval: 200,
    });

    sr.reveal('.reveal-img', {
      origin: 'right',
      interval: 200,
    });
  }, []);

  return (
    <div id="Formacao" className={styles.divGeralFormacao}>
      <div>
        <h2 className={`${styles.h2Formacao} reveal-text`}>Formação</h2>
      </div>
      <div className={styles.containerFormacao}>
        <div className="reveal-img">
          <img
            className={styles.imgFormacao}
            src={formacao3}
            alt="Foto de formatura"
          />
        </div>

        <div className={`${styles.textContainer} reveal-text`}>
          <div>
            <h3 className={styles.h3Formacao}>Formação</h3>
            <ul className={styles.ulFormacao}>
              <li className={styles.liFormacao}>
                Colégio Estadual José Pereira Faustino, Ensino Médio, 2022
              </li>
              <li className={styles.liFormacao}>
                Análise e desenvolvimento de sistemas, Estácio de Sá, 2023 -
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.h3Formacao}>Experiência Profissional</h3>
            <ul className={styles.ulFormacao}>
              <li className={styles.liFormacao}>
                Desenvolvedor web freelancer, 2023 - atual
              </li>
              <li className={styles.liFormacao}>
                Professor de inglês, 2023 - atual
              </li>
            </ul>
          </div>
          <button
          onClick={baixarCv}
          className={styles.buttonFormacao}>Carregar CV</button>
        </div>
      </div>
    </div>
  );
}

export default Formacao;
