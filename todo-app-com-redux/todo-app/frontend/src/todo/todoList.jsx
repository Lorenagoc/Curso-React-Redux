import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IconButton from "../template/iconButton";
IconButton;
import { markAsDone, markAsPending , remove } from "./todoActions";

const TodoList = function TodoList(props) {
	const renderRows = () => {
		const list = props.list || [];
		return list.map((todo) => (
			<tr key={todo._id}>
				<td className={todo.done ? "markAsDone" : ""}>{todo.description}</td>
				<td>
					<IconButton
						style="success"
						icon="check"
						/* onClick={() => props.handleMarkAsDone(todo)} */
						onClick={() => props.markAsDone(todo)}
						hide={todo.done}
					/>
					<IconButton
						style="warning"
						icon="undo"
						/* onClick={() => props.handleMarkAsPending(todo)} */
						onClick={() => props.markAsPending(todo)}
						hide={!todo.done}
					/>
					<IconButton
						style="danger"
						icon="trash-o"
						/* onClick={() => props.handleRemove(todo)} */
						onClick={() => props.remove(todo)}
						hide={!todo.done}
					/>
				</td>
			</tr>
		));
	};
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Descrição</th>
					<th className="tableActions">Ações</th>
				</tr>
			</thead>
			<tbody>{renderRows()}</tbody>
		</table>
	);
};

// state.todo é a chave que está vindo do reducer
const mapStateToProps = (state) => ({
	list: state.todo.list,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			markAsDone,
			markAsPending,
			remove,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
