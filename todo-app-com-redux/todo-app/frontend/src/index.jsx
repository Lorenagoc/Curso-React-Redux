import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import App from "./main/app";
import reducers from "./main/reducers";

// para usar o plugin de debbug redux no navegador
const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/**
 * store é o objeto estado da aplicação que será controlado pelo redux
 */
/* const store = createStore(reducers, devTools); */
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
