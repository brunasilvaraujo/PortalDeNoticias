import { createContext } from 'react';
import { NoticesType } from '../type';

export type NoticesContextType = {
  dataNotices: NoticesType[],
};

const NoticeContext = createContext({} as NoticesContextType);

export default NoticeContext;
