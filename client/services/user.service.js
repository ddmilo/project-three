angular
  .module('DevHops')
  .service('UserService', UserService);


UserService.$inject = ['$http']

function UserService($http){
  const self = this;

  self.loadCurrent = loadCurrent;
  self.addNewUser = addNewUser;
  self.newUser = {};
  self.sessionUser = sessionUser;
  self.currentUserReviews = currentUserReviews;



  function addNewUser(newUser){
  	return $http.post('/api/users', newUser);
  	console.log(newUser);
  }
  function loadCurrent(id) {
		return $http.get(`/api/users/` + _id);
	}
  function sessionUser() {
    return $http.get("/api/sessions/current");
  }
  function currentUserReviews(username) {
    return $http.get(`/api/review/${username}`);
  }
}
