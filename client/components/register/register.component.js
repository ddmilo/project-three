const controller = require('./register.controller.js')
const template = require('./register.html');

const RegisterComponent = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('register', RegisterComponent);
