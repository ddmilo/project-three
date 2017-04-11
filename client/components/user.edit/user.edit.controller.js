//INJECTIONS
UserEditController.$inject = ["UserService", "$state"];

//CONTROLLER
function UserEditController(UserService, $state) {
	const vm = this;

	//WHAT IT DOES
	vm.current = {};
	vm.oldUser = null;
	vm.saveUser = saveUser;
	vm.deleteUser = deleteUser;

	//ACTIVATION
	activate();
	function activate() {
		UserService.sessionUser()
			.then(function(data) {
				vm.current = data.data;
				vm.oldUser = data.data.username;
			})
	}

	//HOW IT DOES IT
	function saveUser() {
		UserService.updateUser(vm.oldUser, vm.current)
			.then(function(data) {
				UserService.updateSession(data.data.user._id)
					.then(function() {
						$state
							.go("userShow");
					});
			});
	}

	function deleteUser() {
		UserService.deleteUser(vm.current._id)
			.then(function(user) {
				$state
					.go("auth");
			});
	}

}

//EXPORTS
module.exports = UserEditController;
