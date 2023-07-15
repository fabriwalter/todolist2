import ImagemLogo from './task-list2.png';

import './imagem.css';

export default function Imagem() {
    return(
        <div className='header-imagem'>
            <img src={ImagemLogo} alt="lista-de-tarefas"></img>
        </div>
    );
}