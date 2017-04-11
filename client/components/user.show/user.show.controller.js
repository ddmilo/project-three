//INJECTIONS
UserShowController.$inject=['$state', 'UserService'];

//CONTROLLER
function UserShowController($state, UserService){

	const vm = this;

	//WHAT IT DOES
	vm.currentUser = null;
	vm.currentUserReviews = null;

	//ACTIVATION
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

//EXPORTS
module.exports = UserShowController;
