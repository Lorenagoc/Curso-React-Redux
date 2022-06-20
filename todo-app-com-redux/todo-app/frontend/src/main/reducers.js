import { combineReducers } from "redux";
import todoReducer from "../todo/todoReducer";

// Reducer que vai concatenar todos os outros
const rootReducer = combineReducers({
	todo: todoReducer, //estado da aplicação controlado pelo redux
});

export default rootReducer;
