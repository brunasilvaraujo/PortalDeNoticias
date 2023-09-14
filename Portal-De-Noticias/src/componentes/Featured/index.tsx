import React from 'react'
import { imagens } from '../../images/path';
import './style.css';

function Featured() {
  return (
    <div>
      <img className='img-featured' src="https://lorempic.com/754/485" alt="Imagem Lorem" />
      <div>
        <h3 className='title-notice'>Notícias mais recente</h3>
        <img className='heart' src={ imagens.favorite} alt="Botão de Favorito" />
        <h2>Título da Notícia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia ipsa ex temporibus delectus optio eum suscipit necessitatibus nihil, inventore placeat, perferendis nulla veritatis voluptatum? Enim hic distinctio unde cumque!</p>
        <p>data da notíca</p>
        <button type="submit">Leia a notícia aqui</button>
      </div>  
    </div>
  );
}

export default Featured;
