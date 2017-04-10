angular
	.module('DevHops')
	.service('ReviewService', ReviewService);


ReviewService.$inject = ['$http']

function ReviewService($http){

  const self = this

  self.addReview = addReview;
  self.loadCurrent = loadCurrent;

 function addReview(newReview, beerId) {
console.log(newReview);

  return $http.post(`api/review/${beerId}` , newReview)
  }

  function loadCurrent() {
  	
  }
 }
