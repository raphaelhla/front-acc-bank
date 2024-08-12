import React, { useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import { fetchAgencias } from '../../services/AgenciaService'; // Certifique-se de que esse serviço existe
import { createCliente, updateCliente } from '../../services/ClienteService';

const ClienteForm = ({ onClose, loadClientes, selectedCliente }) => {
    const [formData, setFormData] = useState({ nome: '', cpf: '', telefone: '' });
    const [idAgencia, setIdAgencia] = useState('');
    const [agencias, setAgencias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAgencias = async () => {
            try {
                const response = await fetchAgencias();
                setAgencias(response.data);
            } catch (err) {
                console.error("Erro ao buscar agências:", err);
            }
        };

        loadAgencias();
    }, []);

    useEffect(() => {
        if (selectedCliente) {
            setFormData(selectedCliente);
            setIdAgencia(selectedCliente.idAgencia); // Defina o ID da agência selecionada
        } else {
            setFormData({ nome: '', cpf: '', telefone: '' });
            setIdAgencia('');
        }
    }, [selectedCliente]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectAgencia = (e) => {
        setIdAgencia(e.target.value);
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
            if (err.response?.data?.errors) {
                const errorMessages = err.response.data.errors.join('\n');
                setError(errorMessages);
            } else {
                setError(err.response?.data?.message || 'Erro ao salvar cliente');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-container">
            <Input label="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} />
            <Input label="CPF" type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
            <Input label="Telefone" type="text" name="telefone" value={formData.telefone} onChange={handleChange} />

            {!selectedCliente && (
                <>
                    <label>Agência</label>
                    <select name="idAgencia" value={idAgencia} onChange={handleSelectAgencia}>
                        <option value="">Selecione uma agência</option>
                        {agencias.map((agencia) => (
                            <option key={agencia.id} value={agencia.id}>
                                {agencia.nome}
                            </option>
                        ))}
                    </select>
                </>
            )}

            {error && (
                <div className="error-message">
                    {error.split('\n').map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
                </div>
            )}

            <div className="btn-group">
                <button className="btn-secondary" type="submit">Salvar</button>
                <button className="btn-cancel" type="button" onClick={onClose}>Cancelar</button>
            </div>
        </form>
    );
};

export default ClienteForm;
