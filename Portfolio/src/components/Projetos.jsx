import React, { useEffect } from 'react';
import styles from './Projetos.module.css';
import barbearia from '../../imagens/barbearia.jpg';
import offstyle from '../../imagens/offstyle.jpg';
import landingPage from '../../imagens/landingPage.png';
import premiumChoices from '../../imagens/premiumChoices.jpg';
import sistema from '../../imagens/sistema.jpeg';
import sanduicheria from '../../imagens/sanduicheria.jpg';
import imgBotPizza from '../../imagens/imgBotPizza.jpg';
import imgGerenciadorEmails from '../../imagens/imgGerenciaEmail.jpg';

import ScrollReveal from 'scrollreveal';

function Projetos() {

    const acessarProjeto = (url)=>{
        window.open(url , '_blank');
    }
    
    const alertaFunction = () =>{
        alert('Sinto muito, mas este projeto está indisponível no momento.');
    }

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '50px',
          duration: 1000,
          easing: 'ease-out',
        });
    
        sr.reveal('.reveal', { interval: 200 });
    }, []);

    return (
        <div id='Projetos' className={styles.containerProjetos}>
            <div className={styles.headerProjetos}>
                <h2 className={styles.h2Projetos}>Projetos</h2>
            </div>

            <div className={styles.projetosContainer}>
                <div className={`${styles.projetos} reveal`}>
                    <img className={styles.imgProjetos} src={offstyle} alt="Loja Streetwear" />
                    <div className={styles.projetoInfo}>
                        <h3 className={styles.projetoTitulo}>Site Institucional</h3>
                        <p className={styles.projetoDescricao}>Criação de presença digital para marca streetwear com design moderno e navegação otimizada para conversão.</p>
                        <button onClick={alertaFunction} className={styles.buttonProjeto}>Indisponível</button>
                    </div>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img className={styles.imgProjetos} src={premiumChoices} alt="E-Commerce" />
                    <div className={styles.projetoInfo}>
                        <h3 className={styles.projetoTitulo}>E-Commerce Premium</h3>
                        <p className={styles.projetoDescricao}>Plataforma de vendas robusta com foco em experiência do usuário e checkout fluido para dispositivos móveis.</p>
                        <button onClick={alertaFunction} className={styles.buttonProjeto}>Indisponível</button>
                    </div>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img className={styles.imgProjetos} src={imgGerenciadorEmails} alt="Classificador de Emails" />
                    <div className={styles.projetoInfo}>
                        <h3 className={styles.projetoTitulo}>Classificador de Emails</h3>
                        <p className={styles.projetoDescricao}>Sistema inteligente para o setor financeiro que automatiza a triagem e resposta de comunicações internas.</p>
                        <button onClick={()=> acessarProjeto('https://gerenciador-de-emails.onrender.com/')} className={styles.buttonProjeto}>Acessar Projeto</button>
                    </div>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img className={styles.imgProjetos} src={imgBotPizza} alt="Agente de Atendimento" />
                    <div className={styles.projetoInfo}>
                        <h3 className={styles.projetoTitulo}>Agente de Atendimento</h3>
                        <p className={styles.projetoDescricao}>Agente conversacional inteligente que gerencia pedidos e interage com clientes seguindo regras de negócio reais.</p>
                        <button onClick={()=> acessarProjeto('https://pizza-bot-frontend.vercel.app/')} className={styles.buttonProjeto}>Acessar Projeto</button>
                    </div>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img className={styles.imgProjetos} src={sistema} alt="Controle de Estoque" />
                    <div className={styles.projetoInfo}>
                        <h3 className={styles.projetoTitulo}>Gestão de Estoque</h3>
                        <p className={styles.projetoDescricao}>Sistema para monitoramento de insumos e vendas, focado na redução de desperdícios e automação de reposição.</p>
                        <button onClick={alertaFunction} className={styles.buttonProjeto}>Indisponível</button>
                    </div>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img className={styles.imgProjetos} src={barbearia} alt="App de Barbearia" />
                    <div className={styles.projetoInfo}>
                        <h3 className={styles.projetoTitulo}>App de Barbearia</h3>
                        <p className={styles.projetoDescricao}>Aplicação mobile desenvolvida para facilitar agendamentos em tempo real e gestão de serviços profissionais.</p>
                        <button onClick={()=> acessarProjeto('https://github.com/JoaoNeto237/Barbearia-App')} className={styles.buttonProjeto}>GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projetos;