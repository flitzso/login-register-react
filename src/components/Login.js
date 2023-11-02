import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="text-home-landing-page text-center">
        {/* Conteúdo do texto da página */}
      </div>
      <div className="text-center justify-content-center">
        <form id="form-login" className="login-form">
          <div className="mb-3">
            <input className="form-control" type="text" name="usuario" placeholder="Usuário" autoComplete="off" />
          </div>
          <div className="mb-3">
            <input className="form-control" id="senha" type="password" name="senha" placeholder="Senha" autoComplete="new-password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="mostrarsenha" />
            <label className="form-check-label" htmlFor="mostrarsenha">Mostrar senha</label>
          </div>
          <button className="btn btn-primary custom-button" type="submit">Entrar</button>
          <div>
            Ainda não se cadastrou? <Link to="/register" className="blue-text">Clique aqui!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
