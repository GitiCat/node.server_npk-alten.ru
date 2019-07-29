module.exports = {

	urlQuery() {
		return 'SELECT * FROM links';
	},

	dataQuery(url) {
		return 'select art.art_title, art.art_subtitle, art.art_descriptor, art_images from articles as art' 
			   + ' where art.art_url_dep = (select id from links where link_url = "' + url + '")';
	},

	prodCatQuery() {
		return "select prod.category_name, prod.category_title, prod.category_descriptor, prod.category_img from product_categories as prod";
	},

	productionQuery(prod_name) {
		return "select prod.prod_name, (select cat.category_title from product_categories as cat where cat.id = prod.prod_category) as prod_category_name, " 
		+ "prod.prod_descriptor, prod.prod_properties, prod.prod_images, prod.prod_files, prod.prod_url from productions as prod " 
		+ "where prod.prod_category = (select cat.id from product_categories as cat where cat.category_name = '" + prod_name + "')"
	},

	newsList() {
		return "select n.title, n.desc, n.category, n.date_n, n.bg_url, n.logo, n.url, n.original_url from news as n";
	}
}