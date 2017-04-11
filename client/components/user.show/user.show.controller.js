UserShowController.$inject=['$state', 'UserService'];

function UserShowController($state, UserService){
	const vm = this;
	vm.currentUser = null;
	vm.currentUserReviews = null;

	activate();

	function activate() {
		UserService.sessionUser()
		.then(function(data) {
			vm.currentUser =  data.data;
			UserService.currentUserReviews(data.data.username)
				.then(function(reviews) {
					vm.currentUserReviews = reviews.data.reviews;
				});
		});		
	}
}


module.exports = UserShowController;
