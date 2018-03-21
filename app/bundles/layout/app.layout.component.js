(function() {
  'use strict';

  var layout = {
    templateUrl: 'bundles/layout/app.layout.view.tpl.html',
    controller: 'LayoutController',
    controllerAs: 'layout'
  };

  angular
    .module('app.layout')
    /**
     * @namespace layout
     * @memberof app.layout
     *
     * @description
     * Component definition for web layout content.
     */
    .component('layout', layout);
})();
