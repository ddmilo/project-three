AuthController.$inject = ['$stateParams', 'UserService'];

function AuthController() {
  const vm = this;

  // vm.beer = [];
  // vm.loading = true;

  // activate();

  // function activate(){
  //   loadBeer();

  // }
  // function loadBeer(){
  //   UserService
  //     .beer()
  //     .then(function resolve(response) {
  //       vm.beer = response.data.beer;
  //       vm.loading = false;
  //     });
  // }

}

module.exports = AuthController;
