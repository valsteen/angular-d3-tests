'use strict';

var app = angular.module('valsteen.Timesheet', ['ngAnimate', 'ngResource', 'ngRoute', 'valsteen.Timesheet.services']);

app.constant('version', 'v0.1.0');

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);

    $routeProvider.
        when('/', {
            controller: 'ListCtrl',
            resolve: {
                useractivities: function (MultiUserActivityLoader) {
                    return MultiUserActivityLoader();
                } },
            templateUrl: '/views/list.html'
        }).otherwise({redirectTo: '/'});

});