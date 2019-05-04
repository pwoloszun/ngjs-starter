'use strict';

angular
  .module('myApp.shared', ['ngMaterial'])
  .component('mainNavigation', {
    templateUrl: './shared/main-navigation/main-navigation.html',

    controller: [
      '$mdSidenav',
      function ($mdSidenav) {
        this.linkItems = [
          { path: '#!/view1', text: 'View One' },
          { path: '#!/view2', text: 'View Two' },
        ];

        this.toggleSideNav = function () {
          var id = 'mainNav';
          $mdSidenav(id).toggle();
        };
      }
    ]
  });
