'use strict';

/* Controllers */

angular.module('TimeSheet.controllers', ['TimeSheet.django', 'TimeSheet.websocket'])
    .controller('MainView', ['$scope', 'WebSocket', function ($scope, WebSocket) {
        $scope.lol = "I lol";
    }]);

