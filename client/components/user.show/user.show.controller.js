UserShowController.$inject=['$state', 'UserService'];

function UserShowController($state, UserService){

const vm = this;
vm.currentUser = req.sessions.currentUser;

}


module.exports = UserShowController;
