import { useContext } from 'react';
import NoticeContext from '../../context/NoticesContext';
import './style.css';

function ButtonMore() {
  const { setPage, data, page } = useContext(NoticeContext);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (data.length && page >= Math.ceil(data.length / 9)) {
    return (
      <button
        className='finalPage'
        onClick={scrollTop}
      >
        Não existe mais notícias!
      </button>);
  }
  return (
    <section>
      <button
        className='more-notice'
        onClick={ loadMore }
        
      >
        MAIS NOTICÍAS
      </button> 
    </section>
  );
}

export default ButtonMore;
