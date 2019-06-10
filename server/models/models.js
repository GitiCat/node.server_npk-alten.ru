module.exports = {

	urlQuery() {
		return 'SELECT * FROM links';
	},

	dataQuery(url) {
		return 'select art.art_title, art.art_subtitle, art.art_descriptor, art_images from articles as art' 
			   + ' where art.art_url_dep = (select id from links where link_url = "' + url + '")';
	},

	prodCatQuery(prod_name) {
		return "select prod.category_name, prod.category_title, prod.category_descriptor from product_categories as prod";
	}
}