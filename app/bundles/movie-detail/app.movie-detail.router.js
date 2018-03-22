(function() {
  'use strict';

  angular
    .module('app.layout.movie-detail')
    /**
     * @namespace dashboardConfig
     * @memberof app.layout.movie-detail
     *
     * @requires $stateProvider
     *
     * @description
     * Page Movie Detail router.
     */
    .config(movieDetailConfig);

  movieDetailConfig.$inject = ['$stateProvider'];

  function movieDetailConfig($stateProvider) {
    $stateProvider
      .state('app.movieDetail', {
        url: '/movie-detail/:movieId-:movieTitle',
        views: {
          'content@app': {
            component: 'movieDetail'
          }
        }
      });
  }
})();
