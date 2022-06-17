const home = require("./pages/home");
const category = require("./pages/category");
const product = require("./pages/product");
const institucional = require("./pages/institucional");
const menuElements = require("./pages/elementos-menu");

module.exports = {
	accountName: "agenciamagma",
	pages: [
		{ data: home, template: "template-home.html" },
		{ data: category, template: "template-categoria.html" },
		{ data: product, template: "template-produto.html" },
		{ data: institucional, template: "template-institucional.html" },
		{ data: menuElements, template: "template-elementos-menu.html" },
	],
};
