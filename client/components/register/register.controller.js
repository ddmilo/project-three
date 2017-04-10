
NewUserController.$inject=['UserService', '$state'];

function NewUserController(UserService, $state){
  const vm = this;

  vm.newUser = {};
  vm.addNew = AddNewUser;
  vm.created = true;

  activate();
  function activate() {}

  function AddNewUser(newUser){
    UserService
      .addNew(vm.newUser)
      .then(function toLogin(response){
        console.log(response);
        if(response.data.success){

        $state.go('login');
    

        } // Name of the state might change, come back to match up state names
    });
  }
}



module.exports = NewUserController;
