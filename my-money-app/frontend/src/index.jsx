import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import reducers from "./main/reducers";
import Routes from "./main/routes";
/**
 * applyMiddleware retorna uma função cujo parâmetro é createStore.
 * O resultado de toda essa chamada retorna uma outra função cujo parâmetro é o reducer.
 * Somente após todas essas chamadas concluídas a store é criada.
 */
const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(
	reducers,
	devTools
);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById("app")
);
