'use strict';

/* Controllers */

angular.module('TimeSheet.controllers', ['TimeSheet.django'])
  .controller('MainView', ['$scope', function($scope) {
  	$scope.lol = "I lol";
  }]);
