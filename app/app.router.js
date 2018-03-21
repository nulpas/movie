(function() {
  'use strict';

  angular
    .module('app')
    /**
     * @namespace appRouter
     * @memberof app
     *
     * @requires $StateProvider
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
      .state('login', {
        url: '/login',
        views: {
          root: {
            templateUrl: 'bundles/login/app.login.view.tpl.html',
            controller: 'LoginController',
            controllerAs: 'login'
          }
        }
      })

      .state('app', {
        abstract: true,
        views: {
          root: {
            templateUrl: 'bundles/layout/app.layout.view.tpl.html',
            controller: 'LayoutController',
            controllerAs: 'layout'
          }
        }
      })

      .state('app.home', {
        url: '/dashboard',
        views: {
          'content@app': {
            templateUrl: 'bundles/dashboard/app.dashboard.view.tpl.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
          }
        }
      });
  }
})();
