const controller = require('./new.user.controller.js')
const template = require('./new.user.html');

const NewUserComponent = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')
  .component('newUser', NewUserComponent);
