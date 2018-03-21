(function() {
  'use strict';

  angular
    .module('app')
    /**
     * @namespace appRouter
     * @memberof app
     *
     * @requires $stateProvider
     * @requires @urlMatcherFactoryProvider
     *
     * @description
     * Application general router.
     */
    .config(appRouter);

  appRouter.$inject = ['$stateProvider', '$urlMatcherFactoryProvider'];

  function appRouter($stateProvider, $urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.strictMode(false);
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          root: {
            component: 'layout'
          }
        }
      })

      .state('app.home', {
        url: '',
        views: {
          'content@app': {
            component: 'dashboard'
          }
        }
      });
  }
})();
