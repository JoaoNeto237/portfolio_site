import styles from './Contato.module.css';
import github from '../../imagens/github.webp';
import linkedin from '../../imagens/linkedin.png';
import instagram from '../../imagens/instagram.jfif';
import whatsapp from '../../imagens/whatsapp.png';

function Contato(){
    return(
        <>
            <div id='Contato' className={styles.containerContato}>
                <h2 className={styles.h2Contato}>Contato</h2>
              <div className={styles.containerConteudoContato}>
                  <div>
                    <h3 className={styles.h3Contato}>Redes sociais</h3>
                    <a href='https://github.com/JoaoNeto237' target='blank' rel='noopener noreferrer'>
                        <img className={styles.imgContato} src={github} alt="Logo do GitHub" />
                    </a>
                   <a href='https://www.instagram.com/joao__neto.01' target='blank' rel='noopener noreferrer'>
                        <img className={styles.imgContato} src={instagram} alt="Logo do instagram" />
                   </a>
                    <a href='https://www.linkedin.com/in/jo%C3%A3o-cunha-4842a1267/' target='blank' rel='noopener noreferrer'>
                        <img className={styles.imgContato} src={linkedin} alt="Logo do linkedin" />
                    </a>
                </div>
                <div>
                    <h3 className={styles.h3Contato}>E-mail</h3>
                    <p className={styles.pContato}>joascunha123@gmail.com</p>
                </div>
                <div>
                    <h3 className={styles.h3Contato}>Telefone</h3>
                    <p className={styles.pContato}>
                        <a href="https://wa.me/5564992559884" target="_blank">
                            <img className={styles.imgContato}  src={whatsapp} alt="icone do WhatsApp"  />
                        </a>
                    </p>
                </div>
             </div>
             <p className={styles.pDireitosContato}>Copyright: © 2024 João Cunha. Todos os direitos reservados</p>
            </div>
        </>
    )
}

export default Contato;