import React from 'react';
import './style.css';
import { imagens } from '../../images/path';

function CardNotice() {
    return (
      <>
        <div className='notices-cards'>
          <div className='card'>
              <h2 className='title-card'>Titulo da Noticia</h2>
              <p className='notice-card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel labore nisi, molestiae, et eius aliquam aliquid ad sed, reprehenderit exercitationem non voluptatem atque? Perspiciatis natus amet officia vel fugit!</p>
              <div className='footer-notice-card'>
              <p className='date-card'>2 dias atrás</p>
              <button className='btn-card'>Leia a noticia aqui</button>  
              </div>
              <img className='heart-card' src={ imagens.favoreited} alt="Botão de Favorito" />
          </div>
           
        </div>
      </>
    );
}

export default CardNotice;
