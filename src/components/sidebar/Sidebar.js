import React from 'react';
import './Sidebar.css';

function Sidebar({ selectedOption, setSelectedOption }) {
  return (
    <div className="sidebar">      
      <div 
        className={`sidebar-option ${selectedOption === 'Agencia' ? 'active' : ''}`} 
        onClick={() => setSelectedOption('Agencia')}
      >
        Agência
      </div>

      <div 
        className={`sidebar-option ${selectedOption === 'Cliente' ? 'active' : ''}`} 
        onClick={() => setSelectedOption('Cliente')}
      >
        Cliente
      </div>

      <div 
        className={`sidebar-option ${selectedOption === 'Conta Corrente' ? 'active' : ''}`} 
        onClick={() => setSelectedOption('Conta Corrente')}
      >
        Conta Corrente
      </div>

      <div 
        className={`sidebar-option ${selectedOption === 'Extrato' ? 'active' : ''}`} 
        onClick={() => setSelectedOption('Extrato')}
      >
        Extrato
      </div>
    </div>
  );
}

export default Sidebar;