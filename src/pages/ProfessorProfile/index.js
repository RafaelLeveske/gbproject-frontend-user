import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function UserProfile() {
  const [professors, setProfessors] = useState([]);

  const history = useHistory();

  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    api
      .get('professors', {
        headers: {
          Authorization: userId,
        },
      })
      .then(response => {
        setProfessors(response.data);
        console.log(response.data);
      });
  }, [userId]);

  async function handleDeleteProfessor(id) {
    try {
      await api.delete(`professors/${id}`, {
        headers: {
          Authorization: userId,
        },
      });

      setProfessors(professors.filter(professor => professor.id !== id));
    } catch (err) {
      alert('Erro ao deletar o professor, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }
  return (
    <div className="profile-container">
      <header>
        <span>
          Bem Vindo,
          {userName}
        </span>

        <Link className="button" to="/professor/new">
          Cadastrar novo professor
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Professores cadastrados</h1>

      <ul>
        {professors.map(professor => (
          <li key={professor.id}>
            <strong>NOME:</strong>
            <p>{professor.name}</p>

            <strong>EMAIL:</strong>
            <p>{professor.email}</p>

            <strong>GRADUAÇÃO:</strong>
            <p>{professor.graduation}</p>

            <button
              onClick={() => handleDeleteProfessor(professor.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
