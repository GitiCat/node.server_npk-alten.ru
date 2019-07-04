const initialState = {
	id: 0
}

export const productionsChange = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'SELECT_PRODUCT':
			console.log(state, action.id);
			return Object.assign({}, state, { id: action.id })
		default:
			return state;
	}
}