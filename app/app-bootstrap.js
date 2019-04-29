'use strict';

window.$script([
  'lib/angular/angular.js',
  'lib/angular-animate/angular-animate.js',
  'lib/angular-aria/angular-aria.js',
  'lib/angular-material/angular-material.js',
  'lib/angular-resource/angular-resource.js',
  'lib/angular-route/angular-route.js',
  // app
  'app.js',
  // core

  // shared
  'shared/main-navigation/main-navigation.js',

  // views/modules

  'view1/view1.js',
  'view2/view2.js',
  'core/version/version.js',
  'core/version/version-directive.js',
  'core/version/interpolate-filter.js'
], function () {
  // when all is done, execute bootstrap AngularJS application
  angular.bootstrap(window.document, ['myApp']);
});
