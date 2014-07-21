'use strict';

app.controller('ListCtrl', ['$scope', '$timeout', 'SubscribeFeed', function ($scope, $timeout, SubscribeFeed) {
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
   
    var updateScheduled = false;

    function scheduleUpdate() {
        if (!updateScheduled) {

            $timeout(function () {
                var newdata = [];
                // trick to cheaply enforce change detection, just create a new container but reference the same array of data
                angular.forEach($scope.data, function (value) {
                    newdata.push(value);
                });
                $scope.data = newdata;
                updateScheduled = false;
            },1000,true);
            updateScheduled = true;
        }
    }

    $scope.chartCreated = function (chart) {
        SubscribeFeed("graph", function (newdata) {
            newdata = angular.fromJson(newdata);
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

                $scope.data[index].values.sort(function (a,b) { return a.date > b.date ? -1 : a.date == b.date ? 0 : 1 })
            });
            scheduleUpdate();
        });
    }


    var now = new Date().getTime();
    $scope.data = [];
    $scope.data.push({"key": "blabla1", "area": true, "values": []}, {"key": "blabla2", "area": true, "values": []});

    for (var i=0;i<100;++i) {
        $scope.data[0].values.push({"date": now + i*600, "value": Math.sin(i/6)});
        $scope.data[1].values.push({"date": now + i*600, "value": Math.cos(i/6)});
    }

    $scope.data.toString = function () {
        console.log("toString called");
    };

    $scope.data.valueOf = function () {
        console.log("valueof called");
    }



}]);