import React from 'react';
import Agencia from '../../pages/agencia/Agencia';
import Cliente from '../../pages/cliente/Cliente';
import Conta from '../../pages/contacorrente/Conta';
import Transacao from '../../pages/extrato/Extrato';
import './Content.css';

function Content({ selectedOption }) {
  return (
    <div className='main-content'>
      <div className="content">
        {selectedOption === 'Agencia' && <Agencia />}
        {selectedOption === 'Cliente' && <Cliente />}
        {selectedOption === 'Conta Corrente' && <Conta />}
        {selectedOption === 'Extrato' && <Transacao />}
      </div>
    </div>
  );
}

export default Content;
