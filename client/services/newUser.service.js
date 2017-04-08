angular
  .module('DevHops')
  .service('NewUserService', NewUserService);


NewUserService.$inject = ['$http']

function NewUserService($http) {
  const self = this;
  self.addNewUser = addNewUser;
  function addNewUser(newUser) {
  return $http.post('api/DevHops', newUser);
  }
}
