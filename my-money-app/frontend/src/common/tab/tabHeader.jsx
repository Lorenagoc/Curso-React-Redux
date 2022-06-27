// Estrutura básica para renderizar uma única aba
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import If from "../operator/if";
import { selectTab } from "./tabActions";
import { map } from "lodash";

class TabHeader extends Component {
	render() {
		// A aba sendo renderizada é a selecionada?
		const selected = this.props.tab.selected === this.props.target;
		// Se o atributo do objeto visible tiver um atributo com o nome do target então marca como visível
		const visible = this.props.tab.visible[this.props.target];
		return (
			<If test={visible}>
				{/* Com esse className a aba, quando clicada, fica com aspecto de
				selecionada */}
				<li className={selected ? "active" : ""}>
					<a
						href="javascript:;"
						data-toggle="tab"
						// target é o id do conteúdo que será exibido
						onClick={() => this.props.selectTab(this.props.target)}
						data-target={this.props.target}
					>
						<i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
					</a>
				</li>
			</If>
		);
	}
}

const mapStateToProps = (state) => ({
	// state.tab está nos reducers e é o resultado da função TabReducer
	tab: state.tab,
});
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ selectTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
