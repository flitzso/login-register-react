import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    // Simulaçao um usuario ou definir um valor de exemplo
    const user = { name: 'João' }; // Substitua isso com a logica real

    return (
        <div>
            <h1>Bem-vindo {user ? user.name : 'Visitante'}</h1>
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
