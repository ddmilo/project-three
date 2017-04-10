angular
  .module('DevHops')
  .service('AuthService', AuthService);


AuthService.$inject = ['$http', '$state', 'Notification'];
function AuthService($http, $state, Notification) {
	const self = this;

	self.logUserIn = logUserIn;

	function logUserIn(credentials) {
		return $http
			.post('/api/user', credentials)
			.then(function onSuccessDoThis(res) {
				$state.go('beer');
			}, function onErrorDoThis(res) {
				Notification.errorMessage(res.message);
			});
	}
}


// Syntax for Promises
PromiseThing
	.then(howToHandleSuccessFn, howToHandleErrorFn)
