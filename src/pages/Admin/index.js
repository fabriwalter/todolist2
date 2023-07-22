import { useState } from 'react';

import Header from '../../components/Header';
import Icone from '../../components/Icone';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri'

import './admin.css';

export default function Admin() {
    
    const [tarefaInput, setTarefaInput] = useState('');
    
    function handleRegister(e) {
        e.preventDefault();
        alert('Enviou tarefa!');
    }

    return(
        
        <div className='admin-container-bigger'>

            <div className='admin-container'>
                <Header titulo="Minhas tarefas" />
                
                <form className='admin-form' onSubmit={handleRegister}>
                    <textarea className='input-tarefas' 
                    placeholder='Digite sua tarefa...'
                    value={tarefaInput}
                    onChange={(e) => setTarefaInput(e.target.value)}></textarea>

                    <button className='button-registrar-tarefa'>Registrar tarefa</button>
                </form>
                <hr className='admin-hr'></hr>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>

                <article className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>Daily UI Challengeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>
                
            </div>

            <div className='admin-container-footer-and-button'>
                <div className='admin-div-logout'>
                    <button className='admin-button-logout'>Sair</button>
                </div>
                <div className='admin-div-footer'>
                    <Footer />
                </div>
            </div>

        </div>
    );
}