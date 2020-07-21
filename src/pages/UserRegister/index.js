import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function UserRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [graduation, setGraduation] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      graduation,
    };
    try {
      await api.post('users', data);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro de usuários</h1>
          <p>Faça o cadastro de um novo usuário administrador</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para página de login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Graduação"
              value={graduation}
              onChange={e => setGraduation(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
