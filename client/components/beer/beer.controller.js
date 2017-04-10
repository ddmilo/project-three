BeerController.$inject = ['BeerService'];

function BeerController(BeerService) {
    const vm = this;
      vm.beer = [];
      vm.loading = true;
        activate();

  function activate() {
    loadAllBeer();
  }


  // HOW IT DOES STUFF
  function loadAllBeer() {
    BeerService
      .loadAll()
      .then(function resolve(response) {
        vm.beer = response.data.beer;
        vm.loading = false;
      })
  }
}


module.exports= BeerController;
