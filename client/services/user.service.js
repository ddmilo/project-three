angular
  .module('DevHops')
  .service('UserService', UserService);


UserService.$inject = ['$http']

function UserService($http){
  const self = this;

  self.addNewUser = addNewUser;

  function addNewUser(newUser){
  	return $http.post('api/user', newUser);
  	console.log(newUser);
  }

}
