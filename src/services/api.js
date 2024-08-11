import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:8080/'});

export const getClientes = () => api.get('/clientes');
export const createCliente = (cliente) => api.post('clientes', cliente);

