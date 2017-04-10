angular
	.module('DevHops')
	.service('BeerService', BeerService);


BeerService.$inject = ['$http']

function BeerService($http){
<<<<<<< HEAD
  const self = this;

  self.loadAll = loadAll;
  self.updateBeer = updateBeer;
  self.loadCurrent = loadCurrent;
  self.addBeer = addBeer;
  // self.deleteBeer= deleteBeer;


  function loadAll() {
    return $http.get('/api/beer');
    //we know all our backend routes will be api
  }
  function loadCurrent(id) {
    return $http.get('api/beer/' + id);

  }
  function addBeer(newBeer){
    return $http.post('api/beer', newBeer);
    console.log(newBeer);
  }
    function updateBeer(beer) {
        return $http.patch('api/beer/' +beer._id,beer);
    }

  // function delete(id) {
  //   return $http.delete('/api/beer/' + id);
  // }
=======
>>>>>>> master

}
