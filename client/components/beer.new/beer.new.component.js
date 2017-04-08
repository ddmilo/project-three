const controller = require('./beer.new.controller.js');
const template = require('./beer.new.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('beer-new', component);
