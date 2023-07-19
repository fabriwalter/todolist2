import Imagem from '../../components/Imagem';

import './header.css';

export default function Header(props) {
  return (
      <header>
        <div className='header-container'>
            <h1 className='header-titulo'>{props.titulo}</h1>
            <Imagem className='header-imagem'/>
        </div>
      </header>
    );
}