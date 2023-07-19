import { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { auth } from '../firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';


export default function Private( { children } ) {
    
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        async function checkLogin() {
            const unsub = onAuthStateChanged(auth, (user) => {
                if(user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }

                    localStorage.setItem('@detalhesUsuario', JSON.stringify(userData))
                    setLoading(false);
                    setSigned(true);

                } else {
                    setLoading(false);
                    setSigned(false);
                }
            })
        }

        checkLogin();

    }, []); 

    if(loading) {
        return(
            <div />
        );
    }

    if(!signed) {
        return <Navigate to="/" />
    }

    return children;

} 