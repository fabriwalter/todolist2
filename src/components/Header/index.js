import Imagem from '../../components/Imagem';

import './header.css';

export default function Header() {
  return (
      <header>
        <div className='header-container'>
            <h1 className='header-titulo'>Lista de tarefas</h1>
            <Imagem className='header-imagem'/>
        </div>
      </header>
    );
}