const controller = require('./auth.controller.js')
const template = require('./auth.html');

const AuthComponent = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('auth', AuthComponent);


