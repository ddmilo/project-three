const controller = require('./beer.show.controller.js');
const template = require('./beer.show.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('beer', component);
