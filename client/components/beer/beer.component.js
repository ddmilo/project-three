const controller = require('./beer.controller.js');
const template = require('./beer.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('beer', component);
