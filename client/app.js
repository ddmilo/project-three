const angular = require('angular');
require('angular-ui-router');

angular
	.module('DevHops', ['ui.router'])
	.config(uiRouterSetup);



uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('', {
			url: '',
			template: ''
		})

	$urlRouterProvider.otherwise('/');

};

