UserShowController.$inject=['$state', 'UserService'];

function UserShowController($state, UserService){
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
}


module.exports = UserShowController;
