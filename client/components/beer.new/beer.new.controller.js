NewBeerController.$inject = ['$state', 'BeerService'];

function NewBeerController($state, BeerService) {
  const vm = this;

  vm.newBeer = {};
  vm.addBeer = addBeer;

  function addBeer() {
    BeerService
      .addBeer(vm.newBeer);
      vm.newBeer = {};
      $state
      .go('beer')
  }


}

module.exports = NewBeerController;
