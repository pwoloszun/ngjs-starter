'use strict';

angular
  .module('myApp.shared', ['ngMaterial'])
  .controller('MainNavigationCtrl', [
    '$scope',
    '$mdSidenav',
    function ($scope, $mdSidenav) {
      this.linkItems = [
        { path: '#!/view1', text: 'View One' },
        { path: '#!/view2', text: 'View Two' },
      ];

      this.toggleSideNav = function () {
        var id = 'mainNav';
        $mdSidenav(id).toggle();
      };
    }
  ]);
