//IONJECTIONS
ReviewEditController.$inject = ["$state", "$stateParams", "ReviewService"];

//CONTROLLER
function ReviewEditController($state, $stateParams, ReviewService) {
	const vm = this;

	//WHAT IT DOES
	vm.current = {};
	vm.updateReview = updateReview;

	//ACTIVATION
	activate();
	function activate() {
		loadCurrentReview();
	}
	function loadCurrentReview() {
		ReviewService
			.loadCurrent($stateParams.reviewId)
			.then(function(response) {
				vm.current = response.data.review;
			});
	}

	//HOW IT DOES IT
	function updateReview() {
		ReviewService
			.updateReview(vm.current)
			.then(function(response) {
				$state
					.go("userShow");
			});
	}
}

module.exports = ReviewEditController;
