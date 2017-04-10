UserShowController.$inject=['$state', 'UserService'];

function UserShowController($state, UserService){
<<<<<<< HEAD

const vm = this;
vm.currentUser = req.sessions.currentUser;

=======
	const vm = this;
	vm.currentUser = null;

	activate();

	function activate() {
		UserService.sessionUser()
		.then(function(data) {
			console.log(data.data);
			vm.currentUser =  data.data;
		});
	}
>>>>>>> a6803a7e61ddfc34759fd43155111be853505a8f
}


module.exports = UserShowController;
