'use strict';

/* Services */

var lfcServices = angular.module('lfcServices', ['ngResource']);

lfcServices.factory('Player', ['$resource',
  function($resource){
    return $resource('players/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'players'}, isArray:true}
    });
  }]);
