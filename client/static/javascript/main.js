var playersApp = angular.module('myApp', ['ngRoute']);

playersApp.config(function ($routeProvider){
  $routeProvider
  .when('/players', {
    templateUrl: 'partials/players.html',
    controller: 'playersController',
    controllerAs: 'playersCtrl'
  })
  .when('/teams', {
    templateUrl: 'partials/teams.html',
    controller: 'teamsController',
    controllerAs: 'teamsCtrl'
  })
  .when('/associations', {
    templateUrl: 'partials/association.html',
    controller: 'associationsController',
    controllerAs: 'associationCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
})