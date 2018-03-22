(function() {
  'use strict';

  angular
    .module('app._core.mdl-upgrade')
    /**
     * @namespace mdlJsRadio
     * @memberof app._core.mdl-upgrade
     *
     * @requires mdlImprover
     *
     * @description
     * Directive for update input radio MDL JS.
     */
    .directive('mdlJsRadio', upgradeMdl)
    /**
     * @namespace mdlJsCheckbox
     * @memberof app._core.mdl-upgrade
     *
     * @requires mdlImprover
     *
     * @description
     * Directive for update input check box MDL JS.
     */
    .directive('mdlJsCheckbox', upgradeMdl)
    /**
     * @namespace mdlJsButton
     * @memberof app._core.mdl-upgrade
     *
     * @requires mdlImprover
     *
     * @description
     * Directive for update button MDL JS.
     */
    .directive('mdlJsButton', upgradeMdl)
    /**
     * @namespace mdlJsTooltip
     * @memberof app._core.mdl-upgrade
     *
     * @requires mdlImprover
     *
     * @description
     * Directive for update tooltip MDL JS.
     */
    .directive('mdlJsTooltip',  upgradeMdl)
    /**
     * @namespace mdlJsMenu
     * @memberof app._core.mdl-upgrade
     *
     * @requires mdlImprover
     *
     * @description
     * Directive for update menu MDL JS.
     */
    .directive('mdlJsMenu',  upgradeMdl);

  upgradeMdl.$inject = ['mdlImprover'];

  function upgradeMdl(mdlImprover) {
    return {
      restrict: 'C',
      link: upgradeMdlLink
    };

    function upgradeMdlLink() {
      mdlImprover.upgradeAll();
    }
  }
})();
