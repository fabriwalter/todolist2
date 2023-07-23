import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Icone from '../../components/Icone';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri'

import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth';
import { 
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    doc,
    deleteDoc
 } from 'firebase/firestore';


import { toast } from 'react-toastify';

import './admin.css';

export default function Admin() {
    
    const [tarefaInput, setTarefaInput] = useState('');
    const [user, setUser] = useState({});
    const [tarefas, setTarefas] = useState([]);


    useEffect(() => {
        async function loadTarefas() {
            const userDetails = localStorage.getItem("@detalhesUsuario");
            setUser(JSON.parse(userDetails));

            if(userDetails) {
                const data = JSON.parse(userDetails);

                const tarefaRef = collection(db, "tarefas");
                const q = query(tarefaRef, orderBy('created', 'desc'), where('userUid', '==', data?.uid));
                const unsub = onSnapshot(q, (snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid
                        })
                    })

                    console.log(lista);
                    setTarefas(lista);
                });
            }

        }

        loadTarefas();
    }, [])

    async function handleRegister(e) {
        e.preventDefault();
        
        if(tarefaInput === '') {
            toast.error('Digite alguma tarefa');
            return;
        }

        await addDoc(collection(db, "tarefas"), {
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user?.uid
        })
        .then(() => {
            toast.success('Tarefa cadastrada com sucesso!');
            setTarefaInput('');
        })
        .catch((error) => {
            toast.error('Erro ao cadastrar tarefa!');
        })

    }

    async function handleLogout() {
        await signOut(auth);
    }

    async function deleteTarefa(id) {
        const docRef = doc(db, 'tarefas', id);
        await deleteDoc(docRef);
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

                {tarefas.map((item) => (
                    <article key={item.id} className='admin-article'>
                    <Icone />
                
                    <p className='admin-tarefas'>{item.tarefa}</p>
                
                    <div className='admin-div-icons'>
                        <Link className='admin-icon'> <FaRegEdit className='admin-icon-edit' /> </Link>
                        <Link onClick={ () => deleteTarefa(item.id) } className='admin-icon'> <RiDeleteBinLine className='admin-icon-delete' /> </Link>
                    </div>
                </article>
                ))}

            </div>

            <div className='admin-container-footer-and-button'>
                <div className='admin-div-logout'>
                    <button className='admin-button-logout' onClick={handleLogout}>Sair</button>
                </div>
                <div className='admin-div-footer'>
                    <Footer />
                </div>
            </div>

        </div>
    );
}