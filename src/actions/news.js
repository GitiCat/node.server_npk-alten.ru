import { SELECT_NEWS_INDEX } from '../constants/news'

export function setNewsIndex(index) {
	return {
		type: SELECT_NEWS_INDEX,
		payload: index
	}
}