const controller = require('./user.show.controller.js')
const template = require('./user.show.html');


const component = {

const UserShowComponent = {
  controller: controller,
  template: template
};

angular
  .module('DevHops')

  .component('userShow', component);

  .component('userShow', UserShowComponent);

