
RegisterController.$inject=['$state', 'UserService'];

function RegisterController($state, UserService){
  const vm = this;

  vm.newUser = {};
  vm.addNewUser = addNewUser;

  activate();

  function activate() {

  }

  function addNewUser(newUser){
    UserService
      .addNewUser(vm.newUser)
      .then (function resolve(){
      vm.newUser = {};
      $state
        .go('auth')
      });
  }
}



module.exports = RegisterController;
