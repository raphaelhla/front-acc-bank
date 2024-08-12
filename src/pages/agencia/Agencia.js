import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import { deleteAgencia, fetchAgencias } from '../../services/AgenciaService';
import './Agencia.css';
import AgenciaForm from './AgenciaForm';
import AgenciaList from './AgenciaList';

const Agencia = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [agencias, setAgencias] = useState([]);
    const [selectedAgencia, setSelectedAgencia] = useState(null);
  
    // Função para buscar as agências na API
    const loadAgencias = async () => {
        try {
            const response = await fetchAgencias();
            setAgencias(response.data);
        } catch (error) {
            console.error("Erro ao buscar agências:", error);
        }
    };

    // Função para deletar uma agência
    const handleDelete = async (id) => {
        try {
            await deleteAgencia(id);
            // Recarrega a lista de agências após deletar
            loadAgencias();
        } catch (error) {
            console.error("Erro ao deletar a agência:", error);
        }
    };

    const handleEdit = (agencia) => {
        setSelectedAgencia(agencia);
        setModalOpen(true);
    };

    useEffect(() => {
        loadAgencias();
      }, []);

	return (
		<div className="agencia-container">
			<h1 className="agencia-header">Agências</h1>
	
			<div className="agencia-actions">
				<button className="btn-create" onClick={() => setModalOpen(true)}>
					Cadastrar Agência
				</button>
		
				<div className="search-container">
					<input type="text" placeholder="Pesquisar por uma Agência" className="input-search" />
					<button className="btn-search">🔍</button>
				</div>
			</div>
	
			<AgenciaList agencias={agencias} handleDelete={handleDelete} handleEdit={handleEdit}/>
	
			<Modal isOpen={modalOpen} titulo={selectedAgencia ? "Editar Agência" : "Cadastrar Agência"}>
				<AgenciaForm onClose={() => {setModalOpen(false); setSelectedAgencia(null)}} loadAgencias={loadAgencias} selectedAgencia={selectedAgencia} />
			</Modal>
		</div>
    );
  };
  
  export default Agencia;