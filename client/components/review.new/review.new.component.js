const controller = require('./review.new.controller.js');
const template = require('./review.new.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('reviewNew', component);
