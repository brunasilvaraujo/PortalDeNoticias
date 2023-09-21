import { useContext, useState } from 'react'
import { imagens } from '../../images/path';
import NoticeContext from '../../context/NoticesContext';

import './style.css';

interface FavoriteButtonProps {
  id: string;
}

function FavoriteButton({ id }: FavoriteButtonProps) {
  const { favorites, setFavorites } = useContext(NoticeContext);
  const [heartFavorite, setHeartFavorite] = useState(false);
  
  const handleToggleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.id;
    setHeartFavorite((prev) => !prev);
    if(favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }; 

  return (
    <div className='favorite-btn'>
      <button
        className='btn-heart'
        onClick={handleToggleFavorite}
        id={id}
      >
      {heartFavorite ?
        <img
          className='heart-card'
          src={imagens.favoreited}
          alt="Botão de Favoritado"
        /> : <img
          className='heart-card'
          src={imagens.favorite}
          alt="Botão de Desfavoritado"
        />}
      </button>
    </div>
  )
}

export default FavoriteButton;