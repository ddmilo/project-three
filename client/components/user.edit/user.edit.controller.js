UserEditController.$inject = ["UserService", "$state"];

function UserEditController(UserService, $state) {
	const vm = this;

	vm.current = {};
	vm.oldUser = null;
	vm.saveUser = saveUser;

	activate();

	function activate() {
		UserService.sessionUser()
			.then(function(data) {
				vm.current = data.data;
				vm.oldUser = data.data.username;
			})
	}

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

}

module.exports = UserEditController;
