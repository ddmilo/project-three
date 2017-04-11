ReviewEditController.$inject = ["$state", "$stateParams", "ReviewService"];

function ReviewEditController($state, $stateParams, ReviewService) {
	const vm = this;

	vm.current = {};
	vm.updateReview = updateReview;

	activate();

	function activate() {
		loadCurrentReview();
	}

	function loadCurrentReview() {
		ReviewService
			.loadCurrent($stateParams.reviewId)
			.then(function(response) {
				vm.current = response.data.review;
				console.log(vm.current.rating);
			});
	}

	function updateReview() {
		ReviewService
			.updateReview(vm.current)
			.then(function(response) {
				console.log(response);
				$state
					.go("userShow");
			})
	}
}

module.exports = ReviewEditController;
