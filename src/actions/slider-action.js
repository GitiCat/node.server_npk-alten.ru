/*
 *	Actions types
 */

export const NEXT_SLIDE = "NEXT_SLIDE";
export const BACK_SLIDE = "BACK_SLIDE";

/*
 *	Generation actions
 */

export function nextSlide(index) {
 	return {
 		type: NEXT_SLIDE,
 		index
 	}
}

export function backSlide(index) {
	return {
		type: BACK_SLIDE,
		index
	}
}