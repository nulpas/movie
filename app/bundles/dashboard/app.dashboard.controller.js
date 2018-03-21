(function() {
  'use strict';

  angular
    .module('app.layout.dashboard')
    /**
     * @namespace DashboardController
     * @memberof app.layout.dashboard
     *
     * @description
     * Dashboard page controller definition.
     */
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$api'];

  function DashboardController($api) {
    var vm = this;
    vm.moviesList = null;
    vm.pagination = null;

    vm.$onInit = _onInitDashboard;

    function _onInitDashboard() {
      var _entityObject = $api.createEntityObject({
        entityName: 'discover/movie',
        forceToOne: true,
        params: {
          'api_key': 'c5e4a1733c2995102fafe209c014e4c0',
          'sort_by': 'popularity.desc',
          page: 1
        }
      });
      $api.getEntity(_entityObject).then(function(success) {
        vm.moviesList = success.results;
      });
    }
  }
})();
