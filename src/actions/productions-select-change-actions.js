export const selectProduct = (title, descriptor, parameters, files, photo) => ({
	type: "SELECT_PRODUCT",
	title: title,
	descriptor: descriptor,
	parameters: parameters,
	files: files,
	photo: photo
})