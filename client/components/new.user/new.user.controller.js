NewUserController.$inject = ['$state', 'UserService'];

function NewUserController($state, UserService) {
  const vm = this;
  vm.addNew = addNew;
  vm.newUser = {};

  activate();

  function activate(){

  }

  function addNew(){
    UserService
      .addNew(vm.newUser)
      .then(function resolve(reponse){
        console.log(reponse);
        $state.go('beer');
      });
  }

}

module.exports = NewUserController;
