const template = require('./auth.html');

const AuthComponent = {
  template: template
};

angular
  .module('DevHops')
  .component('auth', AuthComponent);
