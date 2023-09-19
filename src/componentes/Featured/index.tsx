import React, { useContext } from 'react'
import NoticeContext from '../../context/NoticesContext';
import { imagens as image } from '../../images/path';
import './style.css';

function Featured() {
  const { dataNotices } = useContext(NoticeContext);

  if (!dataNotices.length) {
    return (
      <p>Carregando...</p>
    )
  }

  const { data_publicacao, imagens, titulo, introducao, link  } = dataNotices[0];

  return (
    <div className='feature'>
      <img className='img-featured' src={ 'https://agenciadenoticias.ibge.gov.br/'+JSON.parse(imagens)['image_intro'] } alt="Imagem Lorem" />
      <div className='feature-notice'>
        <div className='header-notice'>
          <h3 className='title-notice'>Notícias mais recente</h3>
          <img className='heart' src={image.favorite} alt="Botão de Favorito" />
        </div>
        <h2 className='title-notice-new'>{ titulo }</h2>
        <p className='notice'>{ introducao }</p>
        <div className='footer-notice'>
          <p className='date-notice'>{data_publicacao}</p>
          <a href={ link } className='btn-notice' type="submit">Leia a notícia aqui</a>
        </div>
      </div>
    </div>
  );
}

export default Featured;
