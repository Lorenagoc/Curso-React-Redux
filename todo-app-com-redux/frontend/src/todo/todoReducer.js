const INITIAL_STATE = { description: "", list: [] };

/**
 * Função que representa o reducer
 * O reducer recebe um estado atual e uma action.
 * Toda vez que uma action for executada, os reducers são chamados para que essa evoluir os estados
 */

// action.payload vem da ação criada e disparada pelo evento causado pelo usuário no input
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "DESCRIPTION_CHANGED":
			return { ...state, description: action.payload };
		case "TODO_SEARCHED":
			return { ...state, list: action.payload };
		case "TODO_CLEAR":
			return { ...state, description: "" };
		default:
			return state;
	}
};
