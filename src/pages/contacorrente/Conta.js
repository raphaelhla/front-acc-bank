import React, { useEffect, useState } from 'react';
import { fetchContas } from '../../services/ContaService';
import './Conta.css';
import ContaList from './ContaList';

const Conta = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [contas, setContas] = useState([]);
    const [selectedConta, setSelectedConta] = useState(null);
  
    // Função para buscar as contas na API
    const loadContas = async () => {
        try {
            const response = await fetchContas();
            setContas(response.data);
        } catch (error) {
            console.error("Erro ao buscar contas:", error);
        }
    };

    const handleEdit = (conta) => {
        setSelectedConta(conta);
        setModalOpen(true);
    };

    useEffect(() => {
        loadContas();
      }, []);

    return (
        <div className="conta-container">
            <h1 className="conta-header">Contas</h1>
    
            <div className="conta-actions">
                {/* <button className="btn-create" onClick={() => setModalOpen(true)}>
                    Cadastrar Conta
                </button> */}
        
                <div className="search-container">
                    <input type="text" placeholder="Pesquisar por uma Conta" className="input-search" />
                    <button className="btn-search">🔍</button>
                </div>
            </div>
    
            <ContaList contas={contas} handleEdit={handleEdit}/>
    
            {/* <Modal isOpen={modalOpen} titulo={selectedConta ? "Editar Cliente" : "Cadastrar Cliente"}>
                <ContaForm onClose={() => {setModalOpen(false); setSelectedConta(null)}} loadContas={loadContas} selectedConta={selectedConta} />
            </Modal> */}
        </div>
    );
  };
  
  export default Conta;