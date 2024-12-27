import React, { useEffect } from 'react';
import styles from './Projetos.module.css';
import barbearia from '../../imagens/barbearia.jpg';
import offstyle from '../../imagens/offstyle.jpg';
import landingPage from '../../imagens/landingPage.png';
import premiumChoices from '../../imagens/premiumChoices.jpg';
import sistema from '../../imagens/sistema.jpeg';
import sanduicheria from '../../imagens/sanduicheria.jpg';

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
                    <img
                        className={styles.imgProjetos}
                        src={offstyle}
                        alt="loja de roupas streetwear"
                    />
                    <h3 className={styles.projetoTitulo}>Site Institucional</h3>
                    <p className={styles.projetoDescricao}>Criação de site institucional para loja de roupas streetwear, com design moderno e intuitivo. O foco é fortalecer a identidade da marca e atrair novos clientes, apresentando produtos de forma envolvente e oferecendo uma navegação ágil e otimizada.</p>
                    <button 
                        onClick={alertaFunction} 
                        className={styles.buttonProjeto}>
                        Projeto indisponível
                    </button>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img
                        className={styles.imgProjetos}
                        src={premiumChoices}
                        alt="E-Commerce"
                    />
                    <h3 className={styles.projetoTitulo}>E-Commerce</h3>
                    <p className={styles.projetoDescricao}>
                    Desenvolvimento de e-commerce de roupas e acessórios exclusivos, voltado para um público jovem e moderno. A plataforma terá navegação intuitiva e otimizada para dispositivos móveis, facilitando a compra e destacando as últimas tendências de moda..</p>
                    <button 
                        onClick={alertaFunction} 
                        className={styles.buttonProjeto}>
                        Projeto indisponível
                    </button>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img
                        className={styles.imgProjetos}
                        src={landingPage}
                        alt="Landing Page"
                    />
                    <h3 className={styles.projetoTitulo}>Landing Page</h3>
                    <p className={styles.projetoDescricao}>Projeto de landing page para loja de tecnologia, focado em destacar produtos inovadores e suas funcionalidades. Com design moderno e responsivo, a página oferece uma navegação rápida e eficiente, atraindo novos clientes e reforçando a imagem da marca.</p>
                    <button 
                        onClick={()=> acessarProjeto('https://github.com/JoaoNeto237/landing-pagee')} 
                        className={styles.buttonProjeto}>
                        Acessar no GitHub
                    </button>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img
                        className={styles.imgProjetos}
                        src={sanduicheria}
                        alt="site de vendas"
                    />
                    <h3 className={styles.projetoTitulo}>Site de vendas</h3>
                    <p className={styles.projetoDescricao}>Site de vendas para uma sanduicheria, com o objetivo de divulgar o cardápio e promover ofertas especiais. A página destaca os diferentes tipos de sanduíches, ingredientes frescos e combinações exclusivas, oferecendo uma experiência visual apetitosa e de fácil navegação para facilitar o pedido online.</p>
                    <button 
                        onClick={()=> acessarProjeto('https://github.com/JoaoNeto237/projeto_hamburgueria')} 
                        className={styles.buttonProjeto}>
                        Acessar no GitHub
                    </button>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img
                        className={styles.imgProjetos}
                        src={sistema}
                        alt="Sistema para controle de estoque"
                    />
                    <h3 className={styles.projetoTitulo}>Sistema para controle de estoque</h3>
                    <p className={styles.projetoDescricao}>Sistema para controle de estoque, com o objetivo de gerenciar e monitorar os níveis de produtos de forma eficiente e precisa. Ele visa otimizar o processo de reposição de estoque, reduzir desperdícios e garantir que a empresa tenha sempre a quantidade adequada de produtos disponíveis para atender à demanda.</p>
                    <button 
                        onClick={alertaFunction} 
                        className={styles.buttonProjeto}>
                        Projeto indisponível
                    </button>
                </div>

                <div className={`${styles.projetos} reveal`}>
                    <img
                        className={styles.imgProjetos}
                        src={barbearia}
                        alt="Aplicativo de Barbearia"
                    />
                    <h3 className={styles.projetoTitulo}>Aplicativo de Barbearia</h3>
                    <p className={styles.projetoDescricao}>Aplicativo de barbearia, desenvolvido para facilitar o agendamento de horários, gerenciamento de clientes e serviços oferecidos. O aplicativo permite que os usuários escolham o profissional desejado, visualizem os serviços disponíveis e agendem o melhor horário, tudo de forma rápida e intuitiva.</p>
                    <button 
                        onClick={()=> acessarProjeto('https://github.com/JoaoNeto237/Barbearia-App')} 
                        className={styles.buttonProjeto}>
                         Acessar no GitHub
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Projetos;
