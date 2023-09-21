import { imagens } from '../../images/path';
import './styles.css';

function Header() {
  return (
    <header>
      <img className='logo' src={imagens.logo} alt="Logo do Trybe News" />
      <div className='title'>
        <h1>TRYBE NEWS</h1>
      </div>
    </header>
  );
}

export default Header;