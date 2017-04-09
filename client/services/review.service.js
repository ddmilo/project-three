angular
	.module('DevHops')
	.service('ReviewService', ReviewService);


ReviewService.$inject = ['$http']

function ReviewService($http){

  const self = this

  self.addReview = addReview;

 function addReview(newReview) {
console.log(newReview);

  return $http.post('api/review/new' , newReview)
  }
 }
