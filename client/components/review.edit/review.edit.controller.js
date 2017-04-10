ReviewEditController.$inject = ["$state", "$stateParams", "ReviewService"];

function ReviewEditController($state, $stateParams, ReviewService) {
	const vm = this;

	vm.current = {};

	function activate() {
		loadCurrentReview();
	}

	function loadCurrentReview() {

	}
}

module.exports = ReviewEditController;
