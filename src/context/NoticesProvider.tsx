import React, { useEffect, useState } from 'react';
import { NoticesType } from '../type';
import NoticesContext from './NoticesContext';
import { fetchApi } from '../services/fetchApi';

type NoticesProviderProps = {
    children: React.ReactNode;
  };

function NoticesProvider({children}: NoticesProviderProps ) {
  const [data, setData] = useState<NoticesType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [favorites, setFavorites] = useState<string[]>([]);

  const dataApi = async () => {
    const resultFetch = await fetchApi(`https://servicodados.ibge.gov.br/api/v3/noticias/`);
    setData(resultFetch.items);
  };
   
  useEffect(() => {
    dataApi();
  }, [page]);

  return (
    <NoticesContext.Provider value={{
      data,
      setData,
      page,
      setPage,
      dataApi,
      favorites,
      setFavorites
    }}>
      { children }
    </NoticesContext.Provider>
  );
}

export default NoticesProvider;
