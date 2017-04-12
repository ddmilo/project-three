//INJECTIONS
NavController.$inject = ["UserService", "$state"];

//CONTROLLER
function NavController(UserService, $state) {
	const vm = this;

	vm.logout = logout;
	vm.state = $state;
	//WHAT IT DOES
	vm.currentUser = null;
	activate();

	function activate() {
		currentUser();
		console.log(vm.state);
	}
	function currentUser() {
		UserService
			.sessionUser()
			.then(function(data) {
				vm.currentUser = data.data;
			});
	}

	//HOW IT DOES IT
	function logout() {
		UserService
			.endSession()
			.then(function(data) {
				vm.currentUser = null;
				$state
					.go("home");
			});
	}
}

module.exports = NavController;