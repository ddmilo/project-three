//INJECTIONS
NewBeerController.$inject = ['$state', 'BeerService'];

//CONTROLLER
function NewBeerController($state, BeerService) {
  const vm = this;

  //WHAT IT DOES
  vm.newBeer = {};
  vm.addBeer = addBeer;

  //HOW IT DOES IT
  function addBeer() {
    BeerService
      .addBeer(vm.newBeer);
    vm.newBeer = {};
    $state
      .go('beer');
  }
}

//EXPORTS
module.exports = NewBeerController;
