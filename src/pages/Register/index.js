import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';


export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegister(e) {
        e.preventDefault();
        
        if(email !== '' && password !== '') {
            alert('teste');
        } else {
            alert('Preencha todos os campos!');
        }

    }

    return (
        <div className='home-container'>
            <Header />
            <div className='home-subtitulo'>
                <p className='roboto-light'>Vamos criar sua conta!</p>
            </div>

            <div className='div-home-form'>
                <form className='home-form' onSubmit={handleRegister}>
                    <input type='text' placeholder='Digite seu e-mail...' className='input-email' value={email} onChange={(e) => setEmail(e.target.value) } />
                    <input type='text' placeholder='********************' className='input-senha' autoComplete={false} value={password} onChange={(e) => setPassword(e.target.value) } />             


                    <button type='submit' className='button-acessar'>Cadastre-se</button>
                </form>
            </div>
            

            <Link to="/" className='link-para-register'>
                Já possui uma conta? Faça o login!
            </Link>

            <Footer />
    </div>
    );
}