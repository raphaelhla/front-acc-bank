import React from 'react';
import Agencia from '../../pages/agencia/Agencia';
import Cliente from '../../pages/cliente/Cliente';
import './Content.css';

function Content({ selectedOption }) {
  return (
    <div className='main-content'>
      <div className="content">
        {selectedOption === 'Agencia' && <Agencia />}
        {selectedOption === 'Cliente' && <Cliente />}
      </div>
    </div>
  );
}

export default Content;
