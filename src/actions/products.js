import { CHANGE_INDEX_PRODUCT } from "../constants/products"

export function setProductIndex(index) {
	return {
		type: CHANGE_INDEX_PRODUCT,
		payload: index
	}
}