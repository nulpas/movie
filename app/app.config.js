(function() {
  'use strict';

  angular
    .module('app')
    /**
     * @namespace appConfig
     * @memberof app
     *
     * @requires $locationProvider
     * //@requires $urlRouterProvider
     * @requires $apiProvider
     * @requires $alertProvider
     *
     * @description
     * General config statement.
     */
    .config(appConfig);

  appConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$apiProvider', '$alertProvider'];

  function appConfig($locationProvider, $urlRouterProvider, $apiProvider, $alertProvider) {
    /* Api Connector Config: */
    $apiProvider.setApiConfig({
      localJson: 'json',
      apiBaseUrl: 'https://api.themoviedb.org/3',
      errorDefinition: {
        errorSchema: {
          'status_message': null,
          success: null,
          'status_code': null
        },
        errorStatus: 'status_code',
        errorMessage: 'status_message',
        loginGoIf401: false
      }
    });

    /* Toast Alert Config: */
    $alertProvider.setDuration(5000);

    /* Router Config: */
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/dashboard');
  }
})();
