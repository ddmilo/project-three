const controller = require("./review.edit.controller.js");
const template = require("./review.edit.html");

const component = {
	controller: controller,
	template: template
};

angular
	.module("DevHops")
	.component("reviewEdit", component);
	