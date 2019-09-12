import { CHANGE_INDEX_PRODUCT } from "../constants/products"

const initialState = {
	index: 0
}

export default function product(state = initialState, action) {
	switch(action.type) {
		case CHANGE_INDEX_PRODUCT:
			return {
				...state,
				index: action.payload
			}

		default:
			return state;
	}
}