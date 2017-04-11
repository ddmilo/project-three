//INJECTIONS
BeerController.$inject = ['BeerService'];

//CONTROLLER
function BeerController(BeerService) {
  const vm = this;

  //WHAT IT DOES
  vm.beer = [];
  vm.loading = true;
  vm.orderBy = null;

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
        averages();
        vm.loading = false;
        console.log(vm.beer);
      });
  }
  function averages() {
    var types = ["Javascript", "HTML", "CSS", "Ruby", "Python", "C", "Java", "PHP"];
    vm.beer.forEach(function(beer) {
      beer.averages = [];
      types.forEach(function(type) {
        var total = 0;
        var count = null;
        var average = null;
        for (var i = 0; i < beer.reviews.length; i++) {
          if (beer.reviews[i].pairing === type) {
            var rating = parseInt(beer.reviews[i].rating);
            total += rating;
            count += 1;
          }
        }
        if (count > 0) {
          average = total / count;
        }
        else {
          average = "N/A";
        }
        beer.averages.push({type: type, average: average});
      });
    });
  }
}


module.exports= BeerController;
