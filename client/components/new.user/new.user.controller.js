NewUserController.$inject = ['$state', 'AuthService'];

function NewUserController($state, AuthService) {
  const vm = this;
  vm.addNew = addNew;
  vm.newUser = {};

  activate();

  function activate(){

  }

  function addNew(){
    AuthService
      .addNew(vm.newUser)
      .then(function resolve(reponse){
        console.log(reponse);
        $state.go('beer');
      });
  }

}

module.exports = NewUserController;
