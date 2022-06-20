import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { add, changeDescription, search, clear } from "./todoActions";

class TodoForm extends Component {
	constructor(props) {
		super(props);
		// garantindo que quando this for chamado ele estará apontando para dentro do componente
		this.keyHandler = this.keyHandler.bind(this);
	}

	componentWillMount() {
		// no momento que for feita uma busca e o componente for acessado a lista já estará carregada
		// react -> action creator
		this.props.search();
	}

	keyHandler(e) {
		const { add, search, clear, description } = this.props;

		if (e.key === "Enter") {
			e.shiftKey ? search() : add(description);
		} else if (e.key === "Escape") {
			clear;
		}
	}

	render() {
		// { action creator, action creator, action creator, data }
		const { add, search, clear, description } = this.props;
		return (
			<div role="form" className="todoForm">
				<Grid cols="8 10 6">
					<input
						id="description"
						className="form-control"
						placeholder="Adicione uma tarefa"
						/* onChange={props.handleChange} */
						onChange={this.props.changeDescription}
						onKeyUp={this.keyHandler}
						value={description}
					/>
				</Grid>

				<Grid cols="4 2 6">
					<IconButton
						style="primary"
						icon="plus"
						onClick={() => add(description)}
					></IconButton>
					<IconButton
						style="info"
						icon="search"
						onClick={() => search()}
					></IconButton>
					<IconButton style="default" icon="close" onClick={clear}></IconButton>
				</Grid>
			</div>
		);
	}
}

/* const TodoForm = function TodoForm(props) {
	const keyHandler = (e) => {
		if (e.key === "Enter") {
			e.shiftKey ? props.handleSearch() : props.handleAdd();
		} else if (e.key === "Escape") {
			props.handleClear();
		}
	};
	return (
		<div role="form" className="todoForm">
			<Grid cols="8 10 6">
				<input
					id="description"
					className="form-control"
					placeholder="Adicione uma tarefa"
					onChange={props.changeDescription}
					onKeyUp={keyHandler}
					value={props.description}
				/>
			</Grid>

			<Grid cols="4 2 6">
				<IconButton
					style="primary"
					icon="plus"
					onClick={props.handleAdd}
				></IconButton>
				<IconButton
					style="info"
					icon="search"
					onClick={props.handleSearch}
				></IconButton>
				<IconButton
					style="default"
					icon="close"
					onClick={props.handleClear}
				></IconButton>
			</Grid>
		</div>
	);
}; */

/* 
state retorna um objeto que ensina o react-redux como ele 
irá mapear o estado para os atributos de props que está 
dentro do componente 
*/
const mapStateToProps = (state) => ({
	description: state.todo.description,
});

/**
 * Dispatch dispara a ação e a encaminha para todos os reducers
 */
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			changeDescription,
			search,
			add,
			clear,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
