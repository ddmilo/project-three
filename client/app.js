const angular = require('angular');
require('angular-ui-router');

angular
	.module('DevHops', ['ui.router'])
	.config(uiRouterSetup);



uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('home', {
      url: '/',
      template: '<auth></auth>'
    })
		.state('auth', {
			url: '/sessions/login',
			template: '<auth></auth>'
		})
    .state('register', {
      url: '/register',
      template:'<register></register>'
    })
    .state('beer', {
      url:'/beer',
      template:'<beer></beer>'
    })
    .state('beerNew', {
      url:'/beer/new',
      template:'<beer-new></beer-new>'
    })
    .state('userShow', {
      url:'/userShow',
      template:'<user-show></user-show>'
    })
    .state('beerShow', {
      url:'/beer/:beerId',
      template:'<beer-show></beer-show>'
    })
    .state('reviewNew', {
      url:'/review/new',
      template:'<review-new></review-new>'
    })
    .state('userEdit', {
      url:'/user/:userId',
      template:'<user-edit></user-edit>'
    })
    .state("reviewEdit", {
      url:"/review/edit/:reviewId",
      template: "<review-edit></review-edit>"
    });

	$urlRouterProvider.otherwise('/');

};
