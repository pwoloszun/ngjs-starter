'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngResource',
  'ngRoute',
  // app specific
  'myApp.shared',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).config([
  '$locationProvider',
  '$routeProvider',
  '$mdIconProvider',
  function ($locationProvider, $routeProvider, $mdIconProvider) {
    $mdIconProvider.fontSet('md', 'material-icons');

    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/view1' });
  }
]);
