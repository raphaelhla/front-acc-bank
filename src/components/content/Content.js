import React from 'react';
import Agencia from '../../pages/agencia/Agencia';
import Cliente from '../../pages/cliente/Cliente';
import Conta from '../../pages/contacorrente/Conta';
import './Content.css';

function Content({ selectedOption }) {
  return (
    <div className='main-content'>
      <div className="content">
        {selectedOption === 'Agencia' && <Agencia />}
        {selectedOption === 'Cliente' && <Cliente />}
        {selectedOption === 'Conta Corrente' && <Conta />}
      </div>
    </div>
  );
}

export default Content;
