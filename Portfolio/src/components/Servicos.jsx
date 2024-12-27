import React, { useEffect } from 'react';
import styles from './Servicos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faShoppingCart, faStore, faTools, faReply, faTasks } from '@fortawesome/free-solid-svg-icons';
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
          <h3>Criação de sites</h3>
          <p>Criação de websites modernos e atraentes, de fácil navegação e interativo, de acordo com suas necessidades e alinhado com o seu objetivo.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <h3>Criação de lojas online</h3>
          <p>Criação de e-commerces, tomando decisões estratégicas para garantir que sua loja seja funcional, atrativa e capaz de atender às necessidades dos clientes.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faStore} />
          <h3>Criação de sistemas para comércio</h3>
          <p>Criação de sistemas que envolvam o desenvolvimento de plataformas, facilitando a gestão de diversos aspectos de um negócio, como inventário, vendas, clientes e finanças.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faTools} />
          <h3>Update de sites</h3>
          <p>Atualizar aquele site antigo para que permaneça funcional, seguro e atraente para os usuários. Desde adição de novos conteúdos até a implementação de novas funcionalidades ou a reformulação completa do design.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faReply} />
          <h3>Criação de BOT</h3>
          <p>Criação de BOT (automação de tarefas ou assistente virtual). O tipo de BOT pode variar de simples bots de chat (WhatsApp, Telegram) a complexos sistemas de automação.</p>
        </div>

        <div className={`${styles.servicos} reveal`}>
          <FontAwesomeIcon icon={faTasks} />
          <h3>Automação de tarefas</h3>
          <p>Automatizar aquelas tarefas repetitivas e que demandam tempo do seu dia a dia, como: organizador de arquivos, e-mail automático, backup automático, postagem automática, entre outros.</p>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
