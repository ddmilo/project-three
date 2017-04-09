NewReviewController.$inject = ['$state','ReviewService'];

function NewReviewController($state, ReviewService) {
   const vm = this;

   vm.newReview = {};
   vm.addReview= addReview;

   // activate();
   function addReview() {
    console.log(vm.newReview);
    ReviewService
      .addReview(vm.newReview);
        vm.newReview = {};
        $state
        .go('beer');
   }
}

module.exports = NewReviewController;
