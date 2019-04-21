'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngResource',
  'ngRoute',
  // app specific
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({ redirectTo: '/view1' });
}]);
