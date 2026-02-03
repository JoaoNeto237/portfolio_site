import React, { useEffect } from 'react';
import styles from './Servicos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faReply, 
  faStore, 
  faTools, 
  faShoppingCart, 
  faTasks 
} from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from 'scrollreveal';

function Servicos() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
    });

    sr.reveal('.reveal', { interval: 200 });
  }, []);
  
return (
    <div id='Servicos' className={styles.containerServicos}>
      <div className={styles.headerServicos}>
        <h2 className={styles.h2Servicos}>Serviços</h2>
      </div>

      <div className={styles.servicosContainer}>
        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faLaptopCode} />
          <h3>Sistemas Web & Mobile</h3>
          <p>Desenvolvimento de aplicações completas e escaláveis, utilizando as tecnologias mais modernas para criar interfaces responsivas e backends de alta performance.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faReply} />
          <h3>Agentes de IA de Voz</h3>
          <p>Criação de assistentes virtuais inteligentes capazes de realizar e receber ligações, com voz humana e integração total ao seu banco de dados ou CRM.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faStore} />
          <h3>IA Conversacional</h3>
          <p>Desenvolvimento de agentes de texto inteligentes para WhatsApp e Web que não apenas respondem, mas executam ações e gerenciam dados em tempo real.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faTools} />
          <h3>Arquitetura Cloud</h3>
          <p>Implementação de soluções em nuvem e funções automatizadas que garantem segurança, escalabilidade e alto desempenho para a infraestrutura do seu projeto.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <h3>Integração de Sistemas</h3>
          <p>Conexão inteligente entre diferentes plataformas, CRMs e APIs para que suas ferramentas trabalhem de forma sincronizada e totalmente automática.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faTasks} />
          <h3>Automação de Processos</h3>
          <p>Transformação de tarefas manuais e repetitivas em fluxos automáticos de alta eficiência, eliminando erros humanos e otimizando o tempo da sua operação.</p>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
