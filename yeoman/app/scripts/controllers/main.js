'use strict';

app.controller('ListCtrl', ['$scope', 'useractivities', function ($scope, useractivities) {
    $scope.useractivities = useractivities;
}]);