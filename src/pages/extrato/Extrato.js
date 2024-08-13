import React, { useState } from 'react';
import { fetchExtratoAnual, fetchExtratoFiltrado, fetchExtratoGeral, fetchExtratoMensal } from '../../services/TransacaoService';
import './Extrato.css';
import TransacaoList from './ExtratoList';

const Extrato = () => {
    const [transacoes, setTransacoes] = useState([]);
    const [idConta, setIdConta] = useState('');
    const [filtroSelecionado, setFiltroSelecionado] = useState('geral');
    const [mesAno, setMesAno] = useState('');
    const [ano, setAno] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');

    const handleFiltroChange = (event) => {
        setFiltroSelecionado(event.target.value);
        setMesAno('');
        setAno('');
        setDataInicio('');
        setDataFim('');
    };

    const handleSearch = () => {
        switch (filtroSelecionado) {
            case 'mensal':
                fetchExtratoMensal(idConta, mesAno)
                    .then(response => setTransacoes(response.data))
                    .catch(error => console.error('Erro ao buscar extrato mensal:', error));
                break;
            case 'anual':
                fetchExtratoAnual(idConta, ano)
                    .then(response => setTransacoes(response.data))
                    .catch(error => console.error('Erro ao buscar extrato anual:', error));
                break;
            case 'filtrado':
                fetchExtratoFiltrado(idConta, dataInicio, dataFim)
                    .then(response => setTransacoes(response.data))
                    .catch(error => console.error('Erro ao buscar extrato filtrado:', error));
                break;
            default:
                fetchExtratoGeral(idConta)
                    .then(response => setTransacoes(response.data))
                    .catch(error => console.error('Erro ao buscar extrato geral:', error));
                break;
        }
    };

    return (
        <div className="extrato-container">
            <h1 className="extrato-header">Extrato</h1>
            <div className="extrato-actions">

                <div className="filtro-container">
                    <select 
                        className="select-filter"
                        value={filtroSelecionado}
                        onChange={handleFiltroChange}
                    >
                        <option value="geral">Extrato Geral</option>
                        <option value="mensal">Extrato Mensal</option>
                        <option value="anual">Extrato Anual</option>
                        <option value="filtrado">Extrato Filtrado</option>
                    </select>
                </div>

                <div className="search-container">
                    <input type="number" placeholder="Id da ContaCorrente" className="input-search" value={idConta} onChange={(e) => setIdConta(e.target.value)}/>

                    {filtroSelecionado === 'mensal' && (
                        <input type="text" placeholder="Mês e Ano (ex: 08/2024)" className="input-search" value={mesAno} onChange={(e) => setMesAno(e.target.value)} />
                    )}

                    {filtroSelecionado === 'anual' && (
                        <input type="text" placeholder="Ano (ex: 2024)" className="input-search" value={ano} onChange={(e) => setAno(e.target.value)} />
                    )}

                    {filtroSelecionado === 'filtrado' && (
                        <div className="date-range-container">
                            <input type="text" placeholder="Data Inicio (ex: 13/08/2024 00:00)" className="input-search" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
                            <input type="text" placeholder="Data Fim (ex: 13/08/2024 23:59)" className="input-search" value={dataFim} onChange={(e) => setDataFim(e.target.value)}/>
                        </div>
                    )}

                    <button className="btn-search" onClick={handleSearch}>🔍</button>
                </div>

                
                
            </div>

            <TransacaoList transacoes={transacoes} />

        </div>
    );
};

export default Extrato;
