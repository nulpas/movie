(function() {
  'use strict';

  angular
    .module('app._core.mdl-upgrade')
    /**
     * @namespace mdlImprover
     * @memberof app._core.mdl-upgrade
     *
     * @requires $timeout
     *
     * @description
     * Service that automatically manages dependent updates for MDL JS.
     */
    .factory('mdlImprover', mdlImprover);

  mdlImprover.$inject = ['$timeout'];

  function mdlImprover($timeout) {
    var _timer;

    return {
      upgradeAll: upgradeAll
    };

    /**
     * @name _upgradeAll
     * @memberof app._core.mdl-upgrade.mdlImprover
     *
     * @description
     * Function to upgrade all registered components.
     *
     * @private
     */
    function _upgradeAll() {
      $timeout.cancel(_timer);
      _timer = $timeout(function() {
        componentHandler.upgradeAllRegistered();
      }, 200);
    }

    /**
     * @name upgradeAll
     * @memberof app._core.mdl-upgrade.mdlImprover
     *
     * @description
     * Factory public function to execute _upgradeAll private function.
     */
    function upgradeAll() {
      _upgradeAll();
    }
  }
})();
