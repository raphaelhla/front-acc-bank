import api from './api';

export const fetchAgencias = () => api.get('/agencias');
export const createAgencia = (agencia) => api.post('/agencias', agencia);
export const updateAgencia = (id, agencia) => api.put(`/agencias/${id}`, agencia);
export const deleteAgencia = (id) => api.delete(`/agencias/${id}`);
