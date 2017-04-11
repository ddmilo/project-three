const controller = require("./user.edit.controller.js");
const template = require("./user.edit.html");

const component = {
	controller: controller,
	template: template
};

angular
	.module("DevHops")
	.component("userEdit", component);