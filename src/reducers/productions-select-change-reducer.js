const initialState = {
	id: 0
}

export const productionsChange = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'SELECT_PRODUCT':
			return Object.assign({}, state, { id: action.id })
		default:
			return state;
	}
}

export const getSelectProductId = (id) => {
	if(id !== NaN || id !== undefined) {
		return Number(id);
	} 
	else {
		throw new Error("Error geting ID of the product...")
	}
}