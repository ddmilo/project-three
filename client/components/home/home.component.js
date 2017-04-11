const controller = require('./home.controller.js')
const template = require('./home.html');

const HomeComponent = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('home', HomeComponent);
