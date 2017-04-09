NewReviewController.$inject = ['$state', 'NewReviewService'];

function NewReviewController($state, NewReviewService) {
   const vm = this;

   vm.newReview = {};
   vm.addReview= addReview;

   // activate();
   function addReview() {
    NewReviewService
      .addReview(vm.newReview);
        vm.newReview = {};
        $state
        .go('beer');
   }
}

module.exports = NewReviewController;
