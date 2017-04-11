angular
	.module('DevHops')
	.service('ReviewService', ReviewService);


ReviewService.$inject = ['$http']

function ReviewService($http){

  const self = this

  self.addReview = addReview;
  self.loadCurrent = loadCurrent;
  self.updateReview = updateReview;


  function updateReview(review) {
		return $http.patch(`/api/review/update/${review._id}`, review)
	}

 function addReview(newReview, beerId) {
console.log(newReview);

  return $http.post(`api/review/${beerId}` , newReview)
  }

  function loadCurrent(id) {
  	return $http.get(`api/review/${id}/edit`);
  }
 }
