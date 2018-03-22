(function() {
  'use strict';

  angular
    .module('app.layout.movie-detail')
    /**
     * @namespace MovieDetailController
     * @memberof app.layout.movie-detail
     * @alias movie
     *
     * @requires $stateParams
     * @requires $api
     *
     * @description
     * Movie details content controller definition.
     */
    .controller('MovieDetailController', MovieDetailController);

  MovieDetailController.$inject = ['$stateParams', '$api'];

  function MovieDetailController($stateParams, $api) {
    var vm = this;
    vm.data = null;

    vm.$onInit = _onInitMovieDetail;

    function _onInitMovieDetail() {
      var _entityObject = $api.createEntityObject({
        entityName: 'movie',
        entityId: $stateParams.movieId,
        params: {
          'api_key': 'c5e4a1733c2995102fafe209c014e4c0'
        }
      });
      return $api.getEntity(_entityObject).then(function(success) {
        vm.data = success;
      });
    }
  }
})();
