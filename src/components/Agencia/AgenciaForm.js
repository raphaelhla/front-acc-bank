import React, { useState } from 'react';
import axios from 'axios';

const AgenciaForm = ({ agencia }) => {
  const [nome, setNome] = useState(agencia?.nome || '');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { nome };

    try {
      if (agencia) {
        await axios.put(`/api/agencias/${agencia.id}`, data);
      } else {
        await axios.post('/api/agencias', data);
      }
    } catch (error) {
      console.error('Erro ao salvar a agência', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome da Agência"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AgenciaForm;