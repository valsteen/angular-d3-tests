'use strict';

app.controller('ListCtrl', ['$scope', '$timeout', '$http', 'SubscribeFeed', function ($scope, $timeout, $http, SubscribeFeed) {
    $scope.graph = "cumulativeLineData";
    $scope.graphs = [
        "cumulativeLineData",
        "data1",
        "data2",
        "data3"
    ];

    $scope.$watch("graph", function(newvalue, oldvalue) {
        $http.get("/scripts/"+newvalue+".json").success(function(data, status, headers, config) {
            $scope.data = data;
        });
    });

    $scope.xAxisTickFormat_Date_Format = function(){
        return function(d){
            return d3.time.format('%Y/%m/%d')(new Date(d)); 
        }
    }

    $scope.getX = function(e){
        return new Date(e.date);
    }
    

    $scope.getY = function(e){
        return e.value;
    }
}]);