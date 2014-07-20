'use strict';

var app = angular.module('valsteen.Timesheet', ['ngAnimate', 'ngResource', 'ngRoute', 'valsteen.Timesheet.services', 'nvd3ChartDirectives']);

app.constant('version', 'v0.1.0');

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider.
        when('/', {
            controller: 'ListCtrl',
            resolve: {
                useractivities: ['MultiUserActivityLoader', function (MultiUserActivityLoader) {
                    return MultiUserActivityLoader();
                }]
            },
            templateUrl: '/views/list.html'
        }).otherwise({redirectTo: '/'});

}]);