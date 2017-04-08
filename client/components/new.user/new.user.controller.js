NewUserController.$inject = ['$stateParams', 'NewUserService'];

function NewUserController($stateParams, NewUserService) {
  const vm = this;
  vm.newUser = {};
  vm.addNewUser = addNewUser;

  function addNewUser(){
    NewUserService
    .addNewUser(vm.newUser);
    vm.newUser = {};
    $state

      .go('DevHops');
  }
}

module.exports = NewUserController;
