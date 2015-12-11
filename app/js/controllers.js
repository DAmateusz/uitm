'use strict';

/* Controllers */

var lfcControllers = angular.module('lfcControllers', []);

lfcControllers.controller('PlayersListCtrl', ['$scope', 'Player',
  function($scope, Player) {
    $scope.players = Player.query();
    $scope.orderProp = 'age';
  }]);

lfcControllers.controller('PlayerDetailCtrl', ['$scope', '$routeParams', 'Player',
  function($scope, $routeParams, Player) {
    $scope.player = Player.get({phoneId: $routeParams.phoneId}, function(player) {
      $scope.mainImageUrl = player.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
