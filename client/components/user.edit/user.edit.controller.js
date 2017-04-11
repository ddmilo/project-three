UserEditController.$inject = ["UserService"];

function UserEditController(UserService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		UserService.sessionUser()
			.then(function(data) {
				vm.current = data.data;
			})
	}

}

module.exports = UserEditController;
