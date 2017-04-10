angular
  .module('DevHops')
  .service('UserService', UserService);


UserService.$inject = ['$http']

function UserService($http){
  const self = this;

  self.loadCurrent = loadCurrent;
  self.addNewUser = addNewUser;
  self.newUser = {};

  function addNewUser(newUser){
  	return $http.post('/api/users', newUser);
  	console.log(newUser);
  }
  function loadCurrent(id) {
		return $http.get(`/api/users/` + _id);
	}

}
