import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
    const rolarParaComponentes = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto((prevState) => !prevState);
    };

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.headerNav}>
                    <button className={styles.hamburguer} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>

                    <div className={`${styles.menuFundo} ${menuAberto ? styles.open : ''}`} onClick={toggleMenu}></div>

                    <div className={`${styles.menuLateral} ${menuAberto ? styles.open : ''}`}>
                        <ul>
                            <li>
                                <button 
                                    onClick={() => rolarParaComponentes('Home')} 
                                    style={{ all: 'unset' }}
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => rolarParaComponentes('Sobre')} 
                                    style={{ all: 'unset' }}
                                >
                                    Sobre
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => rolarParaComponentes('Formacao')} 
                                    style={{ all: 'unset' }}
                                >
                                    Formação
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => rolarParaComponentes('Habilidades')} 
                                    style={{ all: 'unset' }}
                                >
                                    Habilidades
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => rolarParaComponentes('Servicos')} 
                                    style={{ all: 'unset' }}
                                >
                                    Serviços
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => rolarParaComponentes('Projetos')} 
                                    style={{ all: 'unset' }}
                                >
                                    Projetos
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => rolarParaComponentes('Contato')} 
                                    style={{ all: 'unset' }}
                                >
                                    Contato
                                </button>
                            </li>
                        </ul>
                    </div>

                    <ul className={styles.headerUl}>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Home')} 
                                style={{ all: 'unset' }}
                            >
                                Home
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Sobre')} 
                                style={{ all: 'unset' }}
                            >
                                Sobre
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Formacao')} 
                                style={{ all: 'unset' }}
                            >
                                Formação
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Habilidades')} 
                                style={{ all: 'unset' }}
                            >
                                Habilidades
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Servicos')} 
                                style={{ all: 'unset' }}
                            >
                                Serviços
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Projetos')} 
                                style={{ all: 'unset' }}
                            >
                                Projetos
                            </button>
                        </li>
                        <li className={styles.headerLi}>
                            <button 
                                onClick={() => rolarParaComponentes('Contato')} 
                                style={{ all: 'unset' }}
                            >
                                Contato
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
