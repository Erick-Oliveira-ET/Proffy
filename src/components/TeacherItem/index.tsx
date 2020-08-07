import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/icons/whatsapp.svg';

const TeacherItem = () => {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1281278474200788994/QJCJaALd_400x400.jpg" alt="Eliabe Vinicuius"/>
                        <div>
                            <strong>Eliabe Vinicius</strong>
                            <span>Programador</span>
                            
                        </div>
                    </header>

                    <p>
                        Entusiasta de anime.
                        <br/><br/>

                    </p>

                    <footer>
                        <p>
                            Preco/Hora
                            <strong>R$ 1000,00</strong>
                        </p>
                        
                        <button type='button'>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            
    )
}

export default TeacherItem;