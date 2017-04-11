//ANGULAR SETUP
angular
	.module('DevHops')
	.service('ReviewService', ReviewService);

//INJECTIONS
ReviewService.$inject = ['$http'];

//SERVICE
function ReviewService($http){
  const self = this;

  //WHAT IT DOES
  self.addReview = addReview;
  self.loadCurrent = loadCurrent;
  self.updateReview = updateReview;

  //HOW IT DOES IT
  function updateReview(review) {
		return $http.patch(`/api/review/update/${review._id}`, review);
	}

  function addReview(newReview, beerId) {
    return $http.post(`api/review/${beerId}` , newReview);
  }

  function loadCurrent(id) {
  	return $http.get(`api/review/${id}/edit`);
  }
 }
