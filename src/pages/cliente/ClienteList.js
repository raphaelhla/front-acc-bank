import React from 'react';
import Utils from '../../utils/utils';
import './ClienteList.css';


const ClienteList = ({ clientes, handleDelete, handleEdit }) => {

	return (
		<div className="table-container">
			<table className="table">
				<thead>
				<tr>
					<th>Id</th>
					<th>Nome</th>
					<th>CPF</th>
					<th>Telefone</th>
                    <th>Agencia</th>
					<th>Action</th>
				</tr>
				</thead>
				<tbody>
				{clientes.map((cliente) => (
					<tr key={cliente.id}>
						<td>{cliente.id}</td>
						<td>{cliente.nome}</td>
						<td>{Utils.formatarCPF(cliente.cpf)}</td>
						<td>{Utils.formatarTelefone(cliente.telefone)}</td>
                        <td>{cliente.agencia.nome}</td>
						<td>
							<button className="btn-edit" onClick={() => handleEdit(cliente)}>Editar</button>
							<button className="btn-delete" onClick={() => handleDelete(cliente.id)}>Deletar</button>
						</td>
					</tr>
                ))}
				</tbody>
			</table>
		</div>
	);
};

export default ClienteList;
