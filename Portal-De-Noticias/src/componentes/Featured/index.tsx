import React from 'react'
import { imagens } from '../../images/path';
import './style.css';

function Featured() {
  return (
    <div className='feature'>
      <img className='img-featured' src="https://lorempic.com/754/485" alt="Imagem Lorem" />
      <div className='feature-notice'>
        <div className='header-notice'>
          <h3 className='title-notice'>Notícias mais recente</h3>
          <img className='heart' src={ imagens.favorite} alt="Botão de Favorito" />
        </div>
        <h2 className='title-notice-new'>Título da Notícia</h2>
        <p className='notice'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia ipsa ex temporibus delectus optio eum suscipit necessitatibus nihil, inventore placeat, perferendis nulla veritatis voluptatum? Enim hic distinctio unde cumque!</p>
        <div className='footer-notice'>
          <p className='date-notice'>data da notíca</p>
          <button className='btn-notice' type="submit">Leia a notícia aqui</button>
        </div>
      </div>  
    </div>
  );
}

export default Featured;
