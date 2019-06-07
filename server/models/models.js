module.exports = {

	urlQuery() {
		return 'SELECT * FROM links';
	},

	dataQuery(url) {
		return 'select art.art_title, art.art_subtitle, art.art_descriptor, art_images from articles as art' 
			   + ' where art.art_url_dep = (select id from links where link_url = "' + url + '")';
	},

	prodCatQuery(prod_name) {
		return "select prod_cat.category_title, prod_cat.category_descriptor, prod_name, prod_descriptor, prod_images, prod_files, prod_url " 
				+ "from productions as prod, product_categories as prod_cat where prod_cat.category_name = '" + prod_name + "'";
	}
}