(function() {
  'use strict';

  var _movieDetail = {
    templateUrl: 'bundles/movie-detail/app.movie-detail.view.tpl.html',
    controller: 'MovieDetailController',
    controllerAs: 'movie'
  };

  angular
    .module('app.layout.movie-detail')
    /**
     * @namespace movieDetail
     * @memberof app.layout.movie-detail
     *
     * @description
     * Component definition for movie details content.
     */
    .component('movieDetail', _movieDetail);
})();
