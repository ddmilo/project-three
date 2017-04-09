const angular = require('angular');
require('angular-ui-router');

angular
	.module('DevHops', ['ui.router'])
	.config(uiRouterSetup);



uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('auth', {
			url: '/',
			template: '<auth></auth>'
		})
    .state('newUser', {
      url: '/newUser',
      template:'<new-user></new-user>'
    })
    .state('beer', {
      url:'/beer',
      template:'<beer></beer>'
    })
    .state('beerNew', {
      url:'/beer-new',
      template:'<beer-new></beer-new>'
    })
    .state('editBeer', {
      url:'/beer/:beerId/edit-beer',
      template:'<edit-beer></edit-beer>'
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
    });

	$urlRouterProvider.otherwise('/');

};

