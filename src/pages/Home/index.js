import { useState } from 'react';

import Header from '../../components/Header';

import './home.css';

export default function Home() {
    return (
        <div className='home-container'>
            <Header />
            <div className='home-subtitulo'>
                <p className='roboto-light'>Simplifique sua rotina: o aplicativo inteligente que mantém suas tarefas em ordem.</p>
            </div>
        </div>
    );
}