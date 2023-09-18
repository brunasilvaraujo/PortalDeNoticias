import React from 'react';
import './style.css';
import { imagens } from '../../images/path';

function Search() {
  return (
    <div className='search'>
      <button>Mais Recentes</button>
      <button>Release</button>
      <button>Notícia</button>
      <button>Favoritas</button>
      <img className='search-icon' src={ imagens.search} alt="Botão ilustrativo de uma lista" />  
    </div>
  )
}

export default Search;
