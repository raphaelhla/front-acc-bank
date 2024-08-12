import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import { deleteCliente, fetchClientes } from '../../services/ClienteService';
import './Cliente.css';
import ClienteForm from './ClienteForm';
import ClienteList from './ClienteList';

const Cliente = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [selectedCliente, setSelectedCliente] = useState(null);
  
    // Função para buscar os clientes na API
    const loadClientes = async () => {
        try {
            const response = await fetchClientes();
            setClientes(response.data);
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
        }
    };

    // Função para deletar um cliente
    const handleDelete = async (id) => {
        try {
            await deleteCliente(id);
            // Recarrega a lista de clientes após deletar
            loadClientes();
        } catch (error) {
            console.error("Erro ao deletar o cliente:", error);
        }
    };

    const handleEdit = (cliente) => {
        setSelectedCliente(cliente);
        setModalOpen(true);
    };

    useEffect(() => {
        loadClientes();
      }, []);

    return (
        <div className="cliente-container">
            <h1 className="cliente-header">Clientes</h1>
    
                <div className="cliente-actions">
                    <button className="btn-create" onClick={() => setModalOpen(true)}>
                        Cadastrar Cliente
                    </button>
        
                    <div className="search-container">
                        <input type="text" placeholder="Pesquisar por um Cliente" className="input-search" />
                        <button className="btn-search">🔍</button>
                    </div>
                </div>
    
            <ClienteList clientes={clientes} handleDelete={handleDelete} handleEdit={handleEdit}/>
    
            <Modal isOpen={modalOpen} titulo={selectedCliente ? "Editar Cliente" : "Cadastrar Cliente"}>
                <ClienteForm onClose={() => {setModalOpen(false); setSelectedCliente(null)}} loadClientes={loadClientes} selectedCliente={selectedCliente} />
            </Modal>
        </div>
    );
  };
  
  export default Cliente;