export const CutTable = ({ cortes, removeCorte }) => {
	const handleRemove = (index) => {
		removeCorte(index);
	};
	return (
		<div className="table-area">
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Início</th>
							<th>Final</th>
							<th>Ações</th>
						</tr>
					</thead>
					<thead />
					<tbody>
						{cortes.map((el, index) => (
							<tr key={index}>
								<td>{el.start}</td>
								<td>{el.end}</td>
								<td>
									<button className="btn-remover" onClick={() => handleRemove(index)}>
										Remover
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<table />
			</div>
		</div>
	);
};
