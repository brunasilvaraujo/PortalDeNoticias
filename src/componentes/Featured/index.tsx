import { useContext } from 'react'
import NoticeContext from '../../context/NoticesContext';
import FavoriteButton from '../FavoriteButton';
import './style.css';

function Featured() {
  const { data } = useContext(NoticeContext);

  if (!data.length) {
    return (
      <p className='loading'>Carregando...</p>
    )
  }

  const { data_publicacao, imagens, titulo, introducao, link, id } = data[0];
  
  const dateCurrent = new Date();
  
  const dateCurrentFormat = new Date(`${dateCurrent.getMonth() + 1}/${dateCurrent.getDate()}/${dateCurrent.getFullYear()}`);

  const datesPubli = data_publicacao.split(" ")[0].split("/");

  const dataFormat = new Date(`${datesPubli[1]}/${datesPubli[0]}/${datesPubli[2]}`);

  const resultDate = (dateCurrentFormat.getTime() - dataFormat.getTime()) / (1000 * 3600 * 24);

  return (
    <div className='feature'>
      <img className='img-featured' src={ 'https://agenciadenoticias.ibge.gov.br/'+JSON.parse(imagens)['image_intro'] } alt="Imagem Lorem" />
      <div className='feature-notice'>
        <div className='header-notice'>
          <h3 className='title-notice'>Notícias mais recente</h3>
          <button className='btn-heart'>
            <FavoriteButton id={String(id)} />
          </button>
        </div>
        <h2 className='title-notice-new'>{ titulo }</h2>
        <p className='notice'>{ introducao }</p>
        <div className='footer-notice'>
          <p className='date-notice'>{resultDate + ' ' + 'dias atrás'}</p>
          <a href={ link } className='btn-notice'>Leia a notícia aqui</a>
        </div>
      </div>
    </div>
  );
}

export default Featured;
