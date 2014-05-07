'use strict';

/* Controllers */

angular.module('TimeSheet.controllers', ['TimeSheet.django', 'TimeSheet.websocket'])
    .controller('MainView', ['$scope', 'WebSocket', function ($scope, WebSocket) {
        $scope.data = [];
        function receiveMessage(msg) {
            console.log(msg + "!");
            $scope.$apply(function () {

            });
        }
        WebSocket.receive(receiveMessage);
    }]);
