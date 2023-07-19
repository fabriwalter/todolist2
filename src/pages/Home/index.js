import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './home.css';

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        
        if(email !== '' && password !== '') {
            
            await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                //Navegar para ADMIN
                navigate('/admin', { replace: true } )
            })
            .catch((e) => {
                console.log('Erro ao fazer o Login: ' + e);
            })

        } else {
            alert('Preencha todos os campos!');
        }

    }

    return (
        <div className='home-container'>
            <Header />
            <div className='home-subtitulo'>
                <p className='roboto-light'>Simplifique sua rotina: o aplicativo inteligente que mantém suas tarefas em ordem.</p>
            </div>

            <div className='div-home-form'>
                <form className='home-form' onSubmit={handleLogin}>
                    <input type='text' placeholder='Digite seu e-mail...' className='input-email' value={email} onChange={(e) => setEmail(e.target.value) } />
                    <input type='password' placeholder='********************' className='input-senha' value={password} onChange={(e) => setPassword(e.target.value) } />             


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