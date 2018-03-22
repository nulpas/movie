(function() {
  'use strict';

  angular
    .module('app._core.load-on-scroll')

    /**
     * @namespace loadOnScrollContainer
     * @memberof app._core.load-on-scroll
     *
     * @requires $appView
     *
     * @description
     * Directive definition for scroll container about data loader on scroll event.
     */
    .directive('loadOnScrollContainer', loadOnScrollContainer)

    /**
     * @namespace loadOnScroll
     * @memberof app._core.load-on-scroll
     *
     * @description
     * Directive definition for data loader on scroll event.
     */
    .directive('loadOnScroll', loadOnScroll);

  function loadOnScrollContainer() {
    return {
      restrict: 'A',
      link: _loadOnScrollContainerLink
    };

    function _loadOnScrollContainerLink(scope, element) {
      scope.$on('firstLoad', function(e, value) {
        if (value) {
          var _scrollHeight = element.prop('scrollHeight');
          var _availableHeight = element.prop('offsetHeight');
          if (_availableHeight === _scrollHeight) {
            scope.$broadcast('loadOnFirst', true);
          }
        }
      });

      element.on('scroll', function(e) {
        e.stopImmediatePropagation();
        var _scrollHeight = element.prop('scrollHeight');
        var _scrollTop = element.prop('scrollTop');
        var _availableHeight = element.prop('offsetHeight');
        if ((_availableHeight + _scrollTop) >= _scrollHeight) {
          scope.$broadcast('loadOn', true);
        }
      });

      element.on('$destroy', function() {
        scope.$destroy();
      });
    }
  }

  loadOnScroll.$inject = ['mdlImprover'];
  function loadOnScroll(mdlImprover) {
    return {
      restrict: 'A',
      scope: {
        loadOnScroll: '<'
      },
      link: _loadOnScrollLink
    };

    function _loadOnScrollLink(scope, element) {
      angular.element(function() {
        scope.$emit('firstLoad', true);
      });
      scope.$on('loadOnFirst', function(e, value) {
        if (value) {
          scope.loadOnScroll.page ++;
          scope.loadOnScroll.dataLoader().then(function() {
            scope.$emit('firstLoad', true);
          });
          mdlImprover.upgradeAll();
        }
      });

      scope.$on('loadOn', function(e, value) {
        if (value && (scope.loadOnScroll.page < scope.loadOnScroll.totalPages)) {
          scope.loadOnScroll.page ++;
          scope.loadOnScroll.dataLoader();
          mdlImprover.upgradeAll();
        }
      });

      element.on('$destroy', function() {
        scope.$destroy();
      });
    }
  }
})();
