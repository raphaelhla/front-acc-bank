import React, { useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import { createAgencia, updateAgencia } from '../../services/AgenciaService';

const AgenciaForm = ({ onClose, loadAgencias, selectedAgencia }) => {
	const [formData, setFormData] = useState({ nome: '', endereco: '', telefone: '' });
  	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            if (selectedAgencia) {
                await updateAgencia(selectedAgencia.id, formData);
            } else {
                await createAgencia(formData);
            }
			loadAgencias();
            alert('Agência salva com sucesso!');
            setFormData({ nome: '', endereco: '', telefone: '' });
            onClose();
        } catch (err) {
            // Verifica se há erros de validação na resposta
            if (err.response?.data?.errors) {
                // Junta todos os erros em uma string, separados por uma quebra de linha
                const errorMessages = err.response.data.errors.join('\n');
                setError(errorMessages);
            } else {
                setError(err.response?.data?.message || 'Erro ao salvar agência');
            }
        }
    };

	useEffect(() => {
        if (selectedAgencia) {
            setFormData(selectedAgencia);
        } else {
            setFormData({ nome: '', endereco: '', telefone: '' });
        }
    }, [selectedAgencia]);

	return (
		<form onSubmit={handleSubmit} className="input-container">
			<Input label="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange}/>
			<Input label="Endereço" type="text" name="endereco" value={formData.endereco} onChange={handleChange}/>
			<Input label="Telefone" type="text" name="telefone" value={formData.telefone} onChange={handleChange}/>

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

export default AgenciaForm;
