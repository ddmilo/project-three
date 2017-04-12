const template = require("./nav.html");
const controller = require("./nav.controller.js");

const component = {
	template: template,
	controller: controller
};

angular
	.module("DevHops")
	.component("conditionalNav", component);
