//ANGULAR SETUP
angular
	.module('DevHops')
	.service('BeerService', BeerService);

//INJECTIONS
BeerService.$inject = ['$http'];

//SERVICE
function BeerService($http){
  const self = this;

  //WHAT IT DOES
  self.loadAll = loadAll;
  self.updateBeer = updateBeer;
  self.loadCurrent = loadCurrent;
  self.addBeer = addBeer;

  //HOW IT DOES IT
  function loadAll() {
    return $http.get('/api/beer');
  }

  function loadCurrent(id) {
    return $http.get('api/beer/' + id);
  }

  function addBeer(newBeer){
    return $http.post('api/beer', newBeer);
  }
  
  function updateBeer(beer) {
    return $http.patch('api/beer/' +beer._id,beer);
  }
}
