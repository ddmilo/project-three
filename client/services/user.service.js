//ANGULAR SETUP
angular
  .module('DevHops')
  .service('UserService', UserService);

//INJECTIONS
UserService.$inject = ['$http'];

//SERVICE
function UserService($http){
  const self = this;

  //WHAT IT DOES
  self.loadCurrent = loadCurrent;
  self.addNewUser = addNewUser;
  self.newUser = {};
  self.sessionUser = sessionUser;
  self.currentUserReviews = currentUserReviews;
  self.updateUser = updateUser;
  self.updateSession = updateSession;
  self.deleteUser = deleteUser;
  self.endSession = endSession;

  //HOW IT DOES IT
  function addNewUser(newUser){
  	return $http.post('/api/users', newUser);
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

  function updateUser(id, user) {
    return $http.patch(`/api/users/${id}`, user);
  }

  function updateSession(user) {
    return $http.post("/api/sessions/updateLogin", {userId: user});
  }
  
  function deleteUser(userId) {
    return $http.delete(`api/users/delete/${userId}`);
  }

  function endSession() {
    return $http.get("/api/sessions/logout");
  }
}
