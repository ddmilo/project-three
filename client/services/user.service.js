angular
	.module('DevHops')
	.service('UserService', UserService);


UserService.$inject = ['$http']

function UserService($http){
  const self = this;

  self.loadCurrent = loadCurrent;
  self.addUser= addUser;

  function loadCurrent(id){
    return $http.get('api/user/' + id);
  }
function addUser(newUser){
  return $http.post('api/user', newUser);
  }



}
