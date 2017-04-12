//INJECTIONS
NavController.$inject = ["UserService"];

//CONTROLLER
function NavController(UserService) {
	const vm = this;

	vm.currentUser = null;
	activate();

	function activate() {
		currentUser();
	}
	function currentUser() {
		UserService
			.sessionUser()
			.then(function(data) {
				vm.currentUser = data.data;
			});
	}
}

module.exports = NavController;