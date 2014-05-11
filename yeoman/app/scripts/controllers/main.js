'use strict';

app.controller('ListCtrl', ['$scope', 'useractivities', 'UserStream', function ($scope, useractivities, UserStream) {
    $scope.useractivities = useractivities;

    UserStream(function (useractivities) {
        $scope.$apply(function () {
                $scope.useractivities = angular.fromJson(useractivities);
            }
        );
    });
}]);