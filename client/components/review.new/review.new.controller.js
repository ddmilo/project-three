NewReviewController.$inject = ['$state','$stateParams','ReviewService'];

function NewReviewController($state, $stateParams,ReviewService) {
   const vm = this;

   vm.newReview = {};
   vm.addReview= addReview;

   // activate();
   function addReview() {
    console.log($stateParams);
    ReviewService
      .addReview(vm.newReview , $stateParams.beerId);
        vm.newReview = {};
        $state
        .go('beer');
   }
}

module.exports = NewReviewController;
