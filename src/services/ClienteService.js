import api from './api';

export const fetchClientes = () => api.get('/clientes');
export const createCliente = (cliente) => api.post('/clientes', cliente);
export const updateCliente = (id, cliente) => api.put(`/clientes/${id}`, cliente);
export const deleteCliente = (id) => api.delete(`/clientes/${id}`);
