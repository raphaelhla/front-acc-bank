import React from 'react';
import Utils from '../../utils/utils';
import './ContaList.css';

const ContaList = ({ contas, handleOperation }) => {
	return (
		<div className="table-container">
			<table className="table">
				<thead>
				<tr>
					<th>Id</th>
					<th>Numero</th>
					<th>Saldo</th>
                    {/* <th>Cliente</th> */}
                    {/* <th>Agencia</th> */}
					<th>Action</th>
				</tr>
				</thead>
				<tbody>
				{contas.map((conta) => (
					<tr key={conta.id}>
						<td>{conta.id}</td>
						<td>{conta.numero}</td>
						<td>{Utils.formatarMoeda(conta.saldo)}</td>
                        {/* <td>Nome do Cliente</td> */}
                        {/* <td>Nome da Agencia</td> */}
                        {/* <td>{conta.cliente.nome}</td> */}
						<td>
							<button className="btn-edit" onClick={() => handleOperation(conta, "Saque")}>Sacar</button>
                            <button className="btn-edit" onClick={() => handleOperation(conta, "Deposito")}>Depositar</button>
                            <button className="btn-edit" onClick={() => handleOperation(conta, "Transferencia")}>Transferir</button>
							{/* <button className="btn-delete" onClick={() => handleDelete(conta.id)}>Deletar</button> */}
						</td>
                        
					</tr>
                    
                ))}
				</tbody>
			</table>
		</div>
	);
};

export default ContaList;
