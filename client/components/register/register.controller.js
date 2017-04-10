
RegisterController.$inject=['$state', 'UserService'];

function RegisterController($state, UserService){
  const vm = this;

  vm.newUser = {};
  vm.addNewUser = AddNewUser;

  activate();

  function activate() {

  };

  function AddNewUser(newUser){
    UserService
      .addNewUser(vm.newUser)
      vm.newUser = {};
      $state
        .go('auth')
  }
}



module.exports = RegisterController;
