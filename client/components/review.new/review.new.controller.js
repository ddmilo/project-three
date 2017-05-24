//INJECTIONS
NewReviewController.$inject = ['$state','$stateParams','ReviewService'];

//CONTROLLER
function NewReviewController($state, $stateParams,ReviewService) {
   const vm = this;

   //WHAT IT DOES
   vm.newReview = {};
   vm.addReview= addReview;

   //HOW IT DOES IT
   function addReview() {
    ReviewService
      .addReview(vm.newReview , $stateParams.beerId);
    vm.newReview = {};
    $state
      .go('beer');
   }
}

module.exports = NewReviewController;
