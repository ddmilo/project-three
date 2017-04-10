angular
  .module('DevHops')
  .service('UserService', UserService);


UserService.$inject = ['$http']

function UserService($http){
  const self = this;

  self.newUser = {};
  self.addNew = addNew;

  function addNew(newUser){
  	console.log(newUser)

    return $http.post('/api/user', newUser);
  }

}
