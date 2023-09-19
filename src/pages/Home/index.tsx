import React from 'react'
import Header from '../../componentes/Header';
import './styles.css'
import Featured from '../../componentes/Featured';
import Search from '../../componentes/Search';
import CardNotice from '../../componentes/CardNotice';
import ButtonMore from '../../componentes/ButtonMore';

function Home() {
  return (
    <>
      <Header /> 
      <Featured />
      <Search />
      <CardNotice />
      <ButtonMore />
    </>
  );
}

export default Home;