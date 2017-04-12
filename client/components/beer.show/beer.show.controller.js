//INJECTIONS
BeerShowController.$inject = ['$stateParams', 'BeerService', "UserService"];

//CONTROLLER
function BeerShowController($stateParams, BeerService, UserService) {
  const vm = this;

  //WHAT IT DOES
  vm.current = {};
  vm.currentAverages = [];
  vm.currentUser = null;

  //ACTIVATION
  activate();
  function activate() {
    loadCurrentBeer();
    currentUser();
  }
  function loadCurrentBeer() {
  console.log($stateParams);
    BeerService
      .loadCurrent($stateParams.beerId)
      .then(function resolve(response) {
        vm.current = response.data.beer;
        averages();
      });
  }
  function averages() {
    var types = ["Javascript", "HTML", "CSS", "Ruby", "Python", "C", "Java", "PHP"];
    types.forEach(function(type) {
      var total = 0;
      var count = null;
      var average = null;
      for (var i = 0; i < vm.current.reviews.length; i++) {
        if (vm.current.reviews[i].pairing === type) {
          var rating = parseInt(vm.current.reviews[i].rating);
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
      vm.currentAverages.push({type: type, average: average});
    });
  }
  function currentUser() {
    UserService
      .sessionUser()
      .then(function(data) {
        vm.currentUser = data.data;
      });
  }
}

//EXPORTS
module.exports= BeerShowController;
