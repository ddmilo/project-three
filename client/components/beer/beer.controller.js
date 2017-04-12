//INJECTIONS
BeerController.$inject = ['BeerService', "UserService"];

//CONTROLLER
function BeerController(BeerService, UserService) {
  const vm = this;

  //WHAT IT DOES
  vm.beer = [];
  vm.loading = true;
  vm.orderBy = null;
  vm.changeOrder = changeOrder;
  vm.currentUser = null;

  //ACTIVATION
  activate();
  function activate() {
    loadAllBeer();
    currentUser();
    $('[data-toggle="tooltip"]').tooltip();
  }
  function loadAllBeer() {
    BeerService
      .loadAll()
      .then(function resolve(response) {
        vm.beer = response.data.beer;
        averages();
        vm.loading = false;
      });
  }
  function averages() {
    var types = ["Javascript", "HTML", "CSS", "Ruby", "Python", "C", "Java", "PHP"];
    vm.beer.forEach(function(beer) {
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
          average = 0;
        }
        beer[type] = average;
      });
    });
  }

  //HOW IT DOES IT
  function changeOrder(type) {
    vm.orderBy = type;
  }

  function currentUser() {
    UserService
      .sessionUser()
      .then(function(data) {
        vm.currentUser = data.data;
      });
  }
}


module.exports = BeerController;
