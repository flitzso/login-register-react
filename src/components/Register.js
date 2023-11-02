import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="main-landing-page justify-content-center">
        <div className="text-home-landing-page text-center">
          {/* Conteúdo do texto da página */}
        </div>
        <div className="text-center justify-content-center">
          <form action="" method="post" className="login-form" id="form-cadastro">
            <div className="mb-3">
              <input className="form-control" type="text" placeholder="Nome" />
            </div>
            <div className="mb-3">
              <input className="form-control" type="text" name="" id="" placeholder="Sobrenome" />
            </div>
            <div className="mb-3">
              <input className="form-control" type="text" placeholder="E-mail" />
            </div>
            <div className="mb-3">
              <input className="form-control" id="senha" type="password" placeholder="Senha" />
            </div>
            <div className="mb-3">
              <input className="form-control" id="confirmarsenha" type="password" placeholder="Confirmar senha" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="mostrarsenha" />
              <label className="form-check-label" htmlFor="mostrarsenha">Mostrar senha</label>
            </div>
            <button className="btn btn-primary custom-button" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
