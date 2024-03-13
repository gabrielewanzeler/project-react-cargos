import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
    if (username === 'gabriele' && password === 'gabi123') {
        window.location.href = '/homecomponent';
    } else {
        setLoginMessage('Usuário ou senha incorretos');
    }
};

return (
    <div className="home-container">
            <form class="formLogin" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label htmlFor="username">Usuário:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required/>
            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            <button type="submit">Entrar</button>
            
            <p id="loginMessage">{loginMessage}</p>
            </form>
    </div>
    );
}

export default Login;