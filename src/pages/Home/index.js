import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';

import './home.css';

export default function Home() {
    return (
        <div className='home-container'>
            <Header />
            <div className='home-subtitulo'>
                <p className='roboto-light'>Simplifique sua rotina: o aplicativo inteligente que mantém suas tarefas em ordem.</p>
            </div>

            <div className='div-home-form'>
                <form className='home-form'>
                    <input type='text' placeholder='Digite seu e-mail...' className='input-email' />
                    <input type='text' placeholder='********************' className='input-senha' autoComplete={false} />             


                    <button type='submit' className='button-acessar'>Acessar</button>
                </form>
            </div>
            

            <Link to="/register" className='link-para-register'>
                Não possui uma conta? Cadastre-se!
            </Link>

            <Footer />
        </div>
    );
}