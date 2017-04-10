BeerShowController.$inject = ['$stateParams', 'BeerService'];

function BeerShowController($stateParams, BeerService) {
    const vm = this;
      vm.current = {};
        activate();

  function activate() {
    loadCurrentBeer();
  }


  // HOW IT DOES STUFF
  function loadCurrentBeer() {
  console.log($stateParams);
    BeerService
      .loadCurrent($stateParams)
      .then(function resolve(response) {
        vm.current = response.data.beer;
      });
  }
}


module.exports= BeerShowController;
