import React from 'react';
import styles from './Contato.module.css';
import github from '../../imagens/github.webp';
import linkedin from '../../imagens/linkedin.png';
import instagram from '../../imagens/instagram.jfif';
import whatsapp from '../../imagens/whatsapp.png';

function Contato(){
    return(
        <footer id='Contato' className={styles.containerContato}>
            <h2 className={styles.h2Contato}>Contato</h2>
            
            <div className={styles.containerConteudoContato}>
                {/* Redes Sociais */}
                <div>
                    <h3 className={styles.h3Contato}>Siga-me</h3>
                    <div className={styles.socialIcons}>
                        <a href='https://github.com/JoaoNeto237' target='_blank' rel='noopener noreferrer'>
                            <img className={styles.imgContato} src={github} alt="GitHub" />
                        </a>
                        <a href='https://www.instagram.com/joao__neto.01' target='_blank' rel='noopener noreferrer'>
                            <img className={styles.imgContato} src={instagram} alt="Instagram" />
                        </a>
                        <a href='https://www.linkedin.com/in/joão-cunha-4842a1267/' target='_blank' rel='noopener noreferrer'>
                            <img className={styles.imgContato} src={linkedin} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                {/* E-mail */}
                <div>
                    <h3 className={styles.h3Contato}>E-mail</h3>
                    <p className={styles.pContato}>
                        <a href="mailto:joascunha123@gmail.com" className={styles.emailLink}>
                            joascunha123@gmail.com
                        </a>
                    </p>
                </div>

                {/* WhatsApp */}
                <div>
                    <h3 className={styles.h3Contato}>Vamos conversar?</h3>
                    <p className={styles.pContato}>
                        <a href="https://wa.me/5562993994629" target="_blank" rel='noopener noreferrer' className={styles.pContato}>
                            <img className={styles.imgContato} src={whatsapp} alt="WhatsApp" />
                            (62) 99399-4629
                        </a>
                    </p>
                </div>
            </div>

            <p className={styles.pDireitosContato}>
                © 2026 João Cunha. Todos os direitos reservados.
            </p>
        </footer>
    )
}

export default Contato;