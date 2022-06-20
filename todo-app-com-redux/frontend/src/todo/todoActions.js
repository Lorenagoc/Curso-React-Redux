import axios from "axios";

const URL = "http://localhost:3003/api/todos";

/**
 * Método que retorna um objeto que representa uma ação
 * O reducer irá receber essa action e precisará evoluir o estado
 * para refletir a mudança feita pelo usuário
 */
export const changeDescription = (event) => ({
	type: "DESCRIPTION_CHANGED",
	payload: event.target.value,
});

// action creator que busca serviços no backend
// faz uma chamada assíncrona usando axios e recebe uma requisição (que é uma promise ainda não resolvida)
export const search = () => {
	return (dispatch, getState) => {
		const description = getState().todo.description;
		const search = description ? `&description__regex=${description}` : "";
		const request = axios.get(`${URL}?sort=-createdAt${search}`).then((resp) =>
			dispatch({
				type: "TODO_SEARCHED",
				payload: resp.data,
			})
		);
	};
};

// dispara o evento de adicionar e em seguida o de busca
/* export const add = (description) => {
	const request = axios.post(URL, { description: description });
	return [
		{
			type: "TODO_ADDED",
			payload: request,
		},
		search(),
	];
}; */

// com redux-thunk não retornamos mais uma action mas sim um método que recebe dispacth como parâmetro
export const add = (description) => {
	return (dispatch) => {
		axios
			.post(URL, { description: description })
			.then((resp) => dispatch(clear())) // somente quando a resposta está pronta que search é disparada
			.then((resp) => dispatch(search()));
	};
};

export const markAsDone = (todo) => {
	return (dispatch) => {
		axios
			.put(`${URL}/${todo._id}`, { ...todo, done: true })
			/* .then((resp) =>
				dispatch({
					type: "TODO_MARKED_AS_DONE",
					payload: resp.data,
				})
			) */ // atualiza a lista
			.then((resp) => dispatch(search()));
	};
};

export const markAsPending = (todo) => {
	return (dispatch) => {
		axios
			.put(`${URL}/${todo._id}`, { ...todo, done: false })
			/* .then((resp) =>
				dispatch({
					type: "TODO_MARKED_AS_PENDING",
					payload: resp.data,
				})
			) */ // atualiza a lista
			.then((resp) => dispatch(search()));
	};
};

export const remove = (todo) => {
	return (dispatch) => {
		axios.delete(`${URL}/${todo._id}`).then((resp) => dispatch(search()));
	};
};

export const clear = () => {
	return [
		{
			type: "TODO_CLEAR",
		},
		search(),
	];
};
