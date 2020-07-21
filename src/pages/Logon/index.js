import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await api.post('users_sessions', { email, password });

      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassord', password);

      history.push('/profile/professor');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <div className="content">
        <section className="form">
          <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>

            <input
              placeholder="Seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/user/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}
