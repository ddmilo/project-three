//INJECTIONS
BeerController.$inject = ['BeerService'];

//CONTROLLER
function BeerController(BeerService) {
  const vm = this;

  //WHAT IT DOES
  vm.beer = [];
  vm.loading = true;

  //ACTIVATION
  activate();
  function activate() {
    loadAllBeer();
  }
  function loadAllBeer() {
    BeerService
      .loadAll()
      .then(function resolve(response) {
        vm.beer = response.data.beer;
        vm.loading = false;
      });
  }
}


module.exports= BeerController;
