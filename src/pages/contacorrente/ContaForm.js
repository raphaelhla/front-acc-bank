import React, { useState } from 'react';
import Input from '../../components/input/Input';
import { createDeposito, createSaque, createTransferencia } from '../../services/ContaService';

const ContaForm = ({ onClose, loadContas, selectedConta, operationType }) => {
    const [formData, setFormData] = useState({valor: '', descricao: ''});
    const [numeroContaDestino, setNumeroContaDestino] = useState(''); 
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const printarErros = (error, defaultMessage) => {
        console.log(error);
        if (error.response?.data?.errors) {
            const errorMessages = error.response.data.errors.join('\n');
            setError(errorMessages);
        } else {
            setError(error.response?.data?.message || defaultMessage);
        }
    };

    const handleSaque = async (id, saque) => {
        try {
            await createSaque(id, saque);
            await loadContas();
            onClose();
        } catch (error) {
            printarErros(error, 'Erro ao realizar saque');
        }
    };

    const handleDeposito = async (id, deposito) => {
        try {
            await createDeposito(id, deposito);
            await loadContas();
            onClose();
        } catch (error) {
            printarErros(error, "Erro ao realizar depósito");
        }
    };

    const handleTransferencia = async (id, transferencia) => {
        try {
            await createTransferencia(id, transferencia);
            await loadContas();
            onClose();
        } catch (error) {
            printarErros(error, "Erro ao realizar transfrência");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (operationType === 'Saque') {
            handleSaque(selectedConta.id, formData);
        } else if (operationType === 'Deposito') {
            handleDeposito(selectedConta.id, formData);
        } else if (operationType === 'Transferencia') {
            handleTransferencia(selectedConta.id, {...formData, numeroContaDestino});
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-container">
            <Input label="Valor" type="number" name="valor" value={formData.valor} onChange={handleChange} />
            <Input label="Descrição" type="text" name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Opcional"/>
            {operationType === 'Transferencia' && (
                <Input label="Número da Conta Destino" type="number" name="numeroContaDestino" value={numeroContaDestino} onChange={(e) => setNumeroContaDestino(e.target.value)} />
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

export default ContaForm;
