const INITIAL_STATE = {
	list: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "BILLING_CYCLES_FETCHED":
			return {
				...state,
				// resultado do request
				list: action.payload.data,
			};
		default:
			return state;
	}
};
