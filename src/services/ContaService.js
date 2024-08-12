import api from './api';

export const fetchContas = () => api.get('/contas-correntes');
export const createSaque = (id, saque) => api.post(`/contas-correntes/${id}/sacar`, saque);
export const createDeposito = (id, deposito) => api.post(`/contas-correntes/${id}/depositar`, deposito);
export const createTransferencia = (id, transferencia) => api.post(`/contas-correntes/${id}/transferir`, transferencia);

