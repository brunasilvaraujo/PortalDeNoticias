import React, { useEffect, useState } from 'react';
import { NoticesType } from '../type';
import NoticesContext from './NoticesContext';
import { fetchApi } from '../services/fetchApi';

type NoticesProviderProps = {
    children: React.ReactNode;
  };

function NoticesProvider({children}: NoticesProviderProps ) {
  const [dataNotices, setDataNotices] = useState<NoticesType[]>([]);
  
  useEffect(() => {
    const dataFetch = async () => {
      const resultFetch = await fetchApi();
      setDataNotices(resultFetch.items);
    };
    dataFetch();
  }, []);

  return (
    <NoticesContext.Provider value={ { dataNotices: dataNotices } }>
      { children }
    </NoticesContext.Provider>
  );
}

export default NoticesProvider;
