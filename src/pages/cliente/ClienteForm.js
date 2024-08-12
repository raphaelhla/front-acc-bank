import React, { useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import { createCliente, updateCliente } from '../../services/ClienteService';

const ClienteForm = ({ onClose, loadClientes, selectedCliente }) => {
	const [formData, setFormData] = useState({ nome: '', cpf: '', telefone: ''});
    const [idAgencia, setIdAgencia] = useState('');
  	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === 'idAgencia') {
			setIdAgencia(value);
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            if (selectedCliente) {
                await updateCliente(selectedCliente.id, formData);
            } else {
                await createCliente({...formData, idAgencia});
            }
			loadClientes();
            alert('Cliente salvo com sucesso!');
            setFormData({ nome: '', cpf: '', telefone: '' });
            setIdAgencia('');
            onClose();
        } catch (err) {
            // Verifica se há erros de validação na resposta
            if (err.response?.data?.errors) {
                // Junta todos os erros em uma string, separados por uma quebra de linha
                const errorMessages = err.response.data.errors.join('\n');
                setError(errorMessages);
            } else {
                setError(err.response?.data?.message || 'Erro ao salvar cliente');
            }
        }
    };

	useEffect(() => {
        if (selectedCliente) {
            setFormData(selectedCliente);
        } else {
            setFormData({ nome: '', cpf: '', telefone: '' });
        }
    }, [selectedCliente]);

	return (
		<form onSubmit={handleSubmit} className="input-container">
			<Input label="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange}/>
			<Input label="CPF" type="text" name="cpf" value={formData.cpf} onChange={handleChange}/>
			<Input label="Telefone" type="text" name="telefone" value={formData.telefone} onChange={handleChange}/>
            {!selectedCliente && <Input label="Id da Agência" type="number" name="idAgencia" value={idAgencia} onChange={handleChange}/>}

			{error && <div className="error-message">{error.split('\n').map((err, index) => (
                <p key={index}>{err}</p>
            ))}</div>}
            
			<div className="btn-group">
				<button className="btn-secondary" onClick={handleSubmit}>Salvar</button>
				<button className="btn-cancel" onClick={onClose}>Cancelar</button>
			</div>

		</form>
	);
};

export default ClienteForm;
