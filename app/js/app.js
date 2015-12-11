'use strict';

/* App Module */

var lfcApp = angular.module('lfcApp', [
  'ngRoute',
  'lfcAnimations',

  'lfcControllers',
  'phonecatFilters',
  'lfcServices'
]);

lfcApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/players', {
        templateUrl: 'partials/players-list.html',
        controller: 'PlayersListCtrl'
      }).
      when('/players/:phoneId', {
        templateUrl: 'partials/player-detail.html',
        controller: 'PlayerDetailCtrl'
      }).
      otherwise({
        redirectTo: '/players'
      });
  }]);
