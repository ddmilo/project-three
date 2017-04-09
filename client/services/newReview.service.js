angular
  .module('DevHops')
  .service('NewReviewService', NewReviewService);


NewReviewService.$inject = ['$http']

function NewReviewService($http){
  const self = this

  self.addReview = addReview;

function addReview(newReview) {
  return $http.post('api/DevHops')
 }

}
