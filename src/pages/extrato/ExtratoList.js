import React from 'react';
import Utils from '../../utils/utils';
import './ExtratoList.css';

const TransacaoList = ({ transacoes }) => {
	return (
		<div className="table-container">
			<table className="table">
				<thead>
				<tr>
					<th>Id</th>
					<th>Tipo</th>
                    <th>Valor</th>
					{/* <th>Numero Conta</th> */}
                    <th>Data</th>

				</tr>
				</thead>
				<tbody>
				{transacoes.map((transacao) => (
					<tr key={transacao.id}>
						<td>{transacao.id}</td>
						<td>{transacao.tipo}</td>
						<td>{Utils.formatarMoeda(transacao.valor)}</td>
                        {/* <td>{transacao.contaCorrente.numero}</td> */}
                        <td>{transacao.dataHora}</td>
					</tr>
                ))}
				</tbody>
			</table>
		</div>
	);
};

export default TransacaoList;
