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
     * @requires $vibrant
     * @requires $api
     *
     * @description
     * Movie details content controller definition.
     */
    .controller('MovieDetailController', MovieDetailController);

  MovieDetailController.$inject = ['$stateParams', '$vibrant', '$api'];

  function MovieDetailController($stateParams, $vibrant, $api) {
    /* jshint sub: true */
    /* jscs: disable requireDotNotation */
    var vm = this;
    vm.data = null;
    vm.cast = null;
    vm.crew = null;
    vm.backgroundImg = null;

    vm.$onInit = _onInitMovieDetail;

    function _onInitMovieDetail() {
      var _entityObjectMovie = $api.createEntityObject({
        entityName: 'movie',
        entityId: $stateParams.movieId,
        params: {
          'api_key': 'c5e4a1733c2995102fafe209c014e4c0'
        }
      });
      var _entityObjectCredits = $api.createEntityObject({
        entityName: 'movie/' + $stateParams.movieId + '/credits',
        forceToOne: true,
        params: {
          'api_key': 'c5e4a1733c2995102fafe209c014e4c0'
        }
      });

      $api.getEntity(_entityObjectMovie).then(function(success) {
        vm.data = success;
        vm.backgroundImg = 'https://image.tmdb.org/t/p/w1280' + vm.data['backdrop_path'];
      });
      $api.getEntity(_entityObjectCredits).then(function(success) {
        vm.cast = success.cast.slice(0, 5);
        vm.castRest = success.cast.slice(5);
        vm.crew = success.crew.slice(0, 3);
        vm.crewRest = success.crew.slice(3);
      });
    }
  }
})();
