angular
  .module('DevHops')
  .service('AuthService', AuthService);


AuthService.$inject = ['$http']

function AuthService($http){
  const self = this;

  self.addNew = addNew;

  function addNew(newUser){
  	console.log(newUser)

    return $http.post('api/signup', newUser);
  }

}
