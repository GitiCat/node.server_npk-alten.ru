const productionsChange = (state = [], action) => {
	switch (action.type) {
		case 'SELECT_PRODUCT':
			return [
				{
					title: action.title,
					descriptor: action.descriptor,
					parameters: action.parameters,
					files: action.files,
					photo: action.photo
				}
			]
		default:
			return state;
	}
}

export default productionsChange;