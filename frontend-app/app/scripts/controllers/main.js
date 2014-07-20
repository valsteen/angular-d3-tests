'use strict';

app.controller('ListCtrl', ['$scope', 'useractivities', 'UserStream', '$http', '$interval', function ($scope, useractivities, UserStream, $http, $interval) {
    $scope.useractivities = useractivities;

    UserStream(function (useractivities) {
        $scope.$apply(function () {
                $scope.useractivities = angular.fromJson(useractivities);
            }
        );
    });

    $scope.xAxisTickFormat_Date_Format = function(){
        return function(d){
            return d3.time.format('%x %X')(new Date(d)); 
        }
    }

    $scope.getX = function(e){
        return new Date(e.date);
    }
    

    $scope.getY = function(e){
        return e.value;
    }
    

    var z = 1;
    $scope.chartCreated = function (chart) {
        // $interval(function () {
        //     z += 1;
        //     $scope.cumulativeLineData[0].values.push({ "date": new Date(), "value": z});
        //     if ($scope.cumulativeLineData[0].values.length > 10) {
        //         console.log("remove");
        //         $scope.cumulativeLineData[0].values.shift();
        //     };
        //     /*$scope.cumulativeLineData = [{
        //         "key": "Series 2",
        //         "values": [ {"date": "2014-06-20T18:14:42.327Z" , "value": 1000}, {"date": "2014-07-20T18:18:42.327Z" , "value": 1}]
        //      }];*/
        // }, 1000, 0, true);
    }

    $http.get("/scripts/cumulativeLineData.json").success(function(data) {
        $scope.cumulativeLineData = [{
            "key": "Series 2",
            "values": []  // [ {"date": "2014-07-20T18:14:42.327Z" , "value": 20}, {"date": "2014-07-20T18:18:42.327Z" , "value": 1}]
        }];
    });
}]);