import React from 'react';
import Utils from '../../utils/utils';
import './AgenciaList.css';

const AgenciaList = ({ agencias, handleDelete, handleEdit }) => {
	return (
		<div className="table-container">
			<table className="table">
				<thead>
				<tr>
					<th>Id</th>
					<th>Nome</th>
					<th>Endereço</th>
					<th>Telefone</th>
					<th>Action</th>
				</tr>
				</thead>
				<tbody>
				{agencias.map((agencia) => (
					<tr key={agencia.id}>
						<td>{agencia.id}</td>
						<td>{agencia.nome}</td>
						<td>{agencia.endereco}</td>
						<td>{Utils.formatarTelefone(agencia.telefone)}</td>
						<td>
							<button className="btn-edit" onClick={() => handleEdit(agencia)}>Editar</button>
							<button className="btn-delete" onClick={() => handleDelete(agencia.id)}>Deletar</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default AgenciaList;
