(function() {
  'use strict';

  angular
    .module('app.layout.dashboard')
    /**
     * @namespace DashboardController
     * @memberof app.layout.dashboard
     * @alias dashboard
     *
     * @requires $tool
     * @requires $api
     *
     * @description
     * Dashboard page controller definition.
     */
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$tools', '$api'];

  function DashboardController($tools, $api) {
    /* jshint sub: true */
    /* jscs: disable requireDotNotation */
    var vm = this;
    vm.moviesList = null;
    vm.page = null;
    vm.totalPages = null;

    vm.dataLoader = _dataLoader;
    vm.transformUrl = $tools.doFriendlyUrl;
    vm.$onInit = _onInitDashboard;

    function _dataLoader() {
      var _entityObject = $api.createEntityObject({
        entityName: 'discover/movie',
        forceToOne: true,
        params: {
          'api_key': 'c5e4a1733c2995102fafe209c014e4c0',
          'sort_by': 'popularity.desc',
          page: vm.page
        }
      });
      return $api.getEntity(_entityObject).then(function(success) {
        if (vm.moviesList) {
          vm.moviesList = vm.moviesList.concat(success['results']);
        } else {
          vm.moviesList = success['results'];
          vm.totalPages = success['total_pages'];
        }
      });
    }

    function _onInitDashboard() {
      vm.page = vm.page || 1;
      _dataLoader();
    }
  }
})();
