'use strict';

app.controller('ListCtrl', ['$scope', 'useractivities', 'UserStream', 'SubscribeFeed', function ($scope, useractivities, UserStream, SubscribeFeed) {
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
   

    $scope.chartCreated = function (chart) {
        SubscribeFeed("graph", function (newdata) {
            newdata = angular.fromJson(newdata);
            $scope.$apply(function () {
                angular.forEach(newdata, function (set, index) {
                    var key = set["key"];
                    if ($scope.data.length <= index) {
                        $scope.data.push({"key": key, "values": []});
                    }

                    angular.forEach(set["values"], function (value) {
                        value["date"] = new Date(value.date);
                        $scope.data[index]["values"].push(value);
                    });

                    while ($scope.data[index]["values"].length > 100) {
                        $scope.data[index]["values"].shift();
                    }

                    $scope.data[index].values.sort(function (a,b) { return a.date > b.date ? -1 : 1 })
                });
            });
        });
    }


    $scope.data = [];
}]);