(function() {
  'use strict';

  var dashboard = {
    templateUrl: 'bundles/dashboard/app.dashboard.view.tpl.html',
    controller: 'DashboardController',
    controllerAs: 'dashboard'
  };

  angular
    .module('app.layout.dashboard')
    /**
     * @namespace dashboard
     * @memberof app.layout.dashboard
     *
     * @description
     * Component definition for dashboard main content.
     */
    .component('dashboard', dashboard);
})();
