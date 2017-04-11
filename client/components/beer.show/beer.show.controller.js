//INJECTIONS
BeerShowController.$inject = ['$stateParams', 'BeerService'];

//CONTROLLER
function BeerShowController($stateParams, BeerService) {
  const vm = this;

  //WHAT IT DOES
  vm.current = {};

  //ACTIVATION
  activate();
  function activate() {
    loadCurrentBeer();
  }
  function loadCurrentBeer() {
  console.log($stateParams);
    BeerService
      .loadCurrent($stateParams.beerId)
      .then(function resolve(response) {
        vm.current = response.data.beer;
      });
  }
}

//EXPORTS
module.exports= BeerShowController;
