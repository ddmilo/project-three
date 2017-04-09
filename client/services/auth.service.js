angular
  .module('DevHops')
  .service('AuthService', AuthService);


AuthService.$inject = ['$http']

function AuthService($http){
  const self = this;

  self.addNew = add New;

  function addNew(newUser){
    return $http.post('/api/criminals', newUser);
  }

}
