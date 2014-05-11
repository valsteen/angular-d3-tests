'use strict';

var app = module('valsteen.Timesheet', ['valsteen.Timesheet.services']);

app.controller('ListCtrl', ['$scope', 'useractivities', function ($scope, useractivities) {
    $scope.useractivities = useractivities;
}]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'ListCtrl',
            resolve: {
                recipes: function (MultiUserActivityLoader) {
                    return MultiUserActivityLoader();
                } },
            templateUrl: '/views/list.html'
        }).otherwise({redirectTo: '/'});
}]);