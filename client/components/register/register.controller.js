//INJECTIONS
RegisterController.$inject=['$state', 'UserService'];

//CONTROLLER
function RegisterController($state, UserService){
  const vm = this;

  //WHAT IT DOES
  vm.newUser = {};
  vm.addNewUser = addNewUser;

  //HOW IT DOES IT
  function addNewUser(newUser){
    UserService
      .addNewUser(vm.newUser)
      .then (function resolve(){
        vm.newUser = {};
        $state
          .go('auth');
      });
  }
}

//EXPORTS
module.exports = RegisterController;
