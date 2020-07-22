import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './styles.css';

export default function ProfessorProfile() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }
  return (
    <div className="profile-container">
      <header>
        <span>Painel de Controle</span>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <div className="content">
        <Link className="button" to="/profile/professor">
          Professores
        </Link>
        <Link className="button" to="/profile/student">
          Alunos
        </Link>
      </div>
    </div>
  );
}
