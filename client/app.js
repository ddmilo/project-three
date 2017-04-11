//ANGULAR SETUP
const angular = require('angular');
require('angular-ui-router');
angular
	.module('DevHops', ['ui.router'])
	.config(uiRouterSetup);


//INJECTIONS
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

//STATES
function uiRouterSetup($stateProvider, $urlRouterProvider){
	$stateProvider
  //NOT SURE IF WE ARE USING THIS ONE, MAY NEED TO DELETE
    .state('home', {
      url: '/',
      template: '<auth></auth>'
    })
  //OR THIS ONE, MAY NEED TO DELETE
		.state('log-out', {
			url: '/sessions',
			template: '<auth></auth>'
		})
  //LOG IN
		.state('auth', {
			url: '/sessions/login',
			template: '<auth></auth>'
		})
  //CREATE ACCOUNT
    .state('register', {
      url: '/register',
      template:'<register></register>'
    })
  //BEER INDEX
    .state('beer', {
      url:'/beer',
      template:'<beer></beer>'
    })
  //NEW BEER FORM
    .state('beerNew', {
      url:'/beer/new',
      template:'<beer-new></beer-new>'
    })
  //USER INFO PAGE
    .state('userShow', {
      url:'/userShow',
      template:'<user-show></user-show>'
    })
  //SINGLE BEER PAGE
    .state('beerShow', {
      url:'/beer/:beerId',
      template:'<beer-show></beer-show>'
    })
  //NEW REVIEW PAGE
    .state('reviewNew', {
      url:'/review/new',
      template:'<review-new></review-new>'
    })
  //EDIT USER FORM
    .state('userEdit', {
      url:'/user/:userId',
      template:'<user-edit></user-edit>'
    })
  //EDIT REVIEW FORM
    .state("reviewEdit", {
      url:"/review/edit/:reviewId",
      template: "<review-edit></review-edit>"
    });
  //CATCH
	$urlRouterProvider.otherwise('/');
};
