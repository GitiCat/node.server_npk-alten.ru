import { SELECT_NEWS_INDEX } from '../constants/news'

const initialState = {
	index: 0
}

export default function news(state = initialState, action) {
	switch(action.type) {
		case SELECT_NEWS_INDEX:
			return {
				...state,
				index: action.payload - 1
			}
		default:
			return state
	}
}