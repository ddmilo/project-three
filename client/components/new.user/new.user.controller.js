NewUserController.$inject = ['$stateParams', 'UserService'];

function NewUserController() {
  const vm = this;

  vm.newUser={};
  vm.addUser = addUser;

  function addUser() {
    UserService
      .addUser(vm.newUser);
      vm.newUser = {};
      $state
      .go('auth')
  }
}

module.exports = NewUserController;
