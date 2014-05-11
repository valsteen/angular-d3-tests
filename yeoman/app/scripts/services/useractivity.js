'use strict';

var services = angular.module('valsteen.Timesheet.services', ['ngResource']);

services.factory('UserActivity', ['$resource', function ($resource) {
    // TODO -- serverconfig ( such as prefix ) should be elsewhere
    return $resource('/app/api/users/:id', {id: '@id'});
}]);

services.factory('MultiUserActivityLoader', ['UserActivity', '$q', function (UserActivity, $q) {
    return function () {
        var delay = $q.defer();
        UserActivity.query(function (useractivities) {
            delay.resolve(useractivities);
        }, function () {
            delay.reject('Unable to fetch user activities');
        });
        return delay.promise;
    };
}]);

services.factory('UserActivityLoader', ['UserActivity', '$route', '$q', function (UserActivity, $route, $q) {
    return function () {
        var delay = $q.defer();
        UserActivity.get({id: $route.current.params.useractivityId}, function (useractivity) {
            delay.resolve(useractivity);
        }, function () {
            delay.reject('Unable to fetch recipe ' + $route.current.params.recipeId);
        });
        return delay.promise;
    };
}]);

services.factory('UserStream', ['$q', '$timeout', function ($q, $timeout) {
    return function (receiveMessage) {
        function try_until(cb) {
            $timeout(function () {
                if (window.WS4Redis === undefined) {
                    try_until(cb);
                    return;
                }
                cb(WS4Redis);
            }, 500);
        }



        try_until(function (WS4Redis) {
            WS4Redis({
                uri: 'ws://' + location.host + '/ws/foobar?subscribe-broadcast&publish-broadcast&echo',
                receive_message: receiveMessage,
                heartbeat_msg: '--heartbeat--'
            });
        });
    }
}]);