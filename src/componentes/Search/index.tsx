
import CardNotice from '../CardNotice';
import ButtonMore from '../ButtonMore';

import NoticeContext from '../../context/NoticesContext';
import { useContext } from 'react';

import './style.css';
import { imagens } from '../../images/path';

function Search() {
  const { setData, data, dataApi, favorites } = useContext(NoticeContext);

  const handleClick = (type: string) => {
    if (type === 'Favoritas') {
      const filterFav = data.filter((not) => favorites.includes(`${not.id}`));
      setData(filterFav);
    } else {
      const filtered = data.filter(({ tipo }) => tipo === type);
      setData(filtered);
    }
  };

  return (
    <>
      <div className='search'>
        <button
          onClick={ dataApi }
        >
          Mais Recentes
        </button>
        <button
          onClick={ () => handleClick('Release')   }
        >
          Release
        </button>
        <button
          onClick={ () => handleClick('Notícia') }
        >
          Notícia
        </button>
        <button
          onClick={ () => handleClick('Favoritas') }
        >
          Favoritas
        </button>
        <img className='search-icon' src={ imagens.search} alt="Botão ilustrativo de uma lista" />  
      </div>
      <CardNotice />
      <ButtonMore />
    </>
  )
}

export default Search;
