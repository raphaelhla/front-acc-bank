import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgenciaList = () => {
  const [agencias, setAgencias] = useState([]);

  useEffect(() => {
    const fetchAgencias = async () => {
      try {
        const response = await axios.get('/api/agencias');
        setAgencias(response.data);
      } catch (error) {
        console.error('Erro ao buscar as agências', error);
      }
    };

    fetchAgencias();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/agencias/${id}`);
      setAgencias(agencias.filter((agencia) => agencia.id !== id));
    } catch (error) {
      console.error('Erro ao deletar a agência', error);
    }
  };

  return (
    <ul>
      {agencias.map((agencia) => (
        <li key={agencia.id}>
          {agencia.nome}
          <button onClick={() => handleDelete(agencia.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
};

export default AgenciaList;