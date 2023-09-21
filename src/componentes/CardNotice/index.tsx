import { useContext } from 'react';
import NoticeContext from '../../context/NoticesContext';
import FavoriteButton from '../FavoriteButton';

import './style.css';


function CardNotice() {
  const { data, page } = useContext(NoticeContext);

  if (!data.length) {
    return (
      <p className='loading'>Carregando...</p>
    )
  } 

  const dateCurrent = new Date();
  
  const dateCurrentFormat = new Date(`${dateCurrent.getMonth() + 1}/${dateCurrent.getDate()}/${dateCurrent.getFullYear()}`);
  const datesPubli = data.map((date) => date.data_publicacao.split(" ")[0].split("/"));
  
  const datesFormat = datesPubli.map((datePubli) => new Date(`${datePubli[1]}/${datePubli[0]}/${datePubli[2]}`));

  const resultDate = datesFormat.map((dateFormat) => (dateCurrentFormat.getTime() - dateFormat.getTime()) / (1000 * 3600 * 24));
  
  
  return (
    <>
      <div className='notices-cards' >
        {data.slice(0, (9 * page)).map((feature, index) => {
          return (
            <div className='card' key={index}>
              <h2 className='title-card'>{feature.titulo}</h2>
              <p className='notice-card'>{feature.introducao}</p>
              <div className='footer-notice-card'>
                <p className='date-card'>{resultDate[index]+ ' ' + 'dias atrás'}</p>
                <a href={feature.link} className='btn-card'>Leia a noticia aqui</a>
              </div>
              <FavoriteButton id={String(feature.id)} />
            </div>
          )
        })}
      </div>
    </>
  );
}

export default CardNotice;
