'use strict';

angular.module('TimeSheet', [
  'ngRoute',
  'TimeSheet.filters',
  'TimeSheet.services',
  'TimeSheet.directives',
  'TimeSheet.controllers',
  'TimeSheet.django'
]).config(['$routeProvider', 'static_url', function($routeProvider, static_url) {
  $routeProvider.when('/', {templateUrl: static_url + 'app/partials/main.html', controller: 'MainView'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);