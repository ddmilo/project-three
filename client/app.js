const angular = require('angular');
require('angular-ui-router');

angular
	.module('DevHops', ['ui.router'])
	.config(uiRouterSetup);



uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('auth', {
			url: '/auth',
			template: '<auth></auth>'
		})
    .state('beer', {
      url:'/beer',
      template:'<beer></beer>'
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

