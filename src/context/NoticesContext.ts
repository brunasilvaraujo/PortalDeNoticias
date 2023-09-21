import { createContext } from 'react';
import { NoticesType } from '../type';

export type NoticesContextType = {
  data: NoticesType[],
  setData: React.Dispatch<React.SetStateAction<NoticesType[]>>,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  dataApi: () => Promise<void>,
  favorites: string[],
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>
};

const NoticeContext = createContext({} as NoticesContextType);

export default NoticeContext;
