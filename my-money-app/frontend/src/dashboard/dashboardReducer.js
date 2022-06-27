const INITIAL_STATE = {
	summary: {
		credit: 0,
		debt: 0,
	},
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		/* Quando a action chegar o estado é replicado e a variável sumário
        é alterada baseado no que chegou */
		case "BILLING_SUMMARY_FETCHED":
			return {
				...state,
				summary: action.payload.data,
			};
		default:
			return state;
	}
}
