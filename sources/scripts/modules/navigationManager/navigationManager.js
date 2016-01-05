/**
* NAVIGATION MANAGER
* @description Modify the navigation according to the screen size
* @module navigationManager
*
* @example
* var navigation = require('navigationManager.js');
* navigation.init();
*
* @requires underscore.js
*/
var navigationManager = (function() {

    /**
    * @name init
    * @function
    * @static
    * @description Initialise the navigation manager, adding matchMedia listener
    * @example navigationManager.init();
    *
    */
    function init () {
        return;
    }

    /**
    * @name footerSwitch
    * @function
    * @static
    *
    * @desc: Switch social links at the bottom of the list
    *
    */
    function footerSwitch () {
        return;
    }

    /**
    * @name generateMobileNavigation
    * @function
    * @static
    * @description Generate links from main-nav and secondary-nav that will be on the mobile nav
    *
    */
    function generateMobileNavigation () {
        return;
    }


    /**
    * @name updateReferences
    * @function
    * @static
    *
    * @description Update internal references to DOM modification
    *
    */
    function updateReferences () {
        return;
    }


    /**
    * @name navChange
    * @function
    * @static
    * @param {Number} wWidth window width
    *
    * @description Remove 1 link from nav to add it to dropdown more menu
    *
    */
    function navChange (wWidth) {
        return;
    }

    /**
    * @name testUp
    * @function
    * @static
    * @param {number} wWidth  width of the window
    *
    * @description Test if we add a link in the nav from the dropDown
    *
    */
    function testUp (wWidth) {
        return;
    }

    /**
    * @name testDown
    * @function
    * @static
    * @param {number} wwidth  width of the window
    *
    * @description Test if a link needs to be removed from nav to be included in the dropdown
    *
    */
    function testDown (wWidth) {
        return;
    }


    /**
    * @name moveInDropDown
    * @function
    * @static
    * @param {DOMObject} listItem LI to include in Dropdown
    *
    * @description Add the specified item in the dropdown list
    *
    */
    function moveInDropDown (listItem) {
        return;
    }

    /**
    * @name moveOutDropDown
    * @function
    * @static
    *
    * @description Remove 1 item in the dropdown list to put it back in the nav
    *
    */
    function moveOutDropDown () {
        return;
    }

    /**
    * @name dropdownNav
    * @function
    * @static
    *
    * @description Create the dropdown navigation for medium screens
    *
    */
    function dropdownNav() {
        return;
    }

    /**
    * @name createDDown
    * @function
    * @static
    * @param {DOMList} ddownList List
    *
    * @description Create a new ul[li] with arguments
    *
    */
    function createDDown (ddownList) {
        return;
    }

    /**
    * @name tabNav
    * @function
    * @static
    *
    * @description Create the tab navigation for medium screens
    *
    */
    function tabNav() {
        return;
    }

    /**
    * @name reInitNav
    * @function
    * @static
    *
    * @description Create the original navigation for desktop screens
    * from tablet / mobile navigation
    *
    */
    function reInitNav() {
        return;
    }
    /* istanbul ignore else */
    if( process.env.dev ){
        return{
            init                     : init,
            footerSwitch             : footerSwitch,
            generateMobileNavigation : generateMobileNavigation,
            updateReferences         : updateReferences,
            navChange                : navChange,
            testUp                   : testUp,
            testDown                 : testDown,
            moveInDropDown           : moveInDropDown,
            moveOutDropDown          : moveOutDropDown,
            dropdownNav              : dropdownNav,
            createDDown              : createDDown,
            tabNav                   : tabNav,
            reInitNav                : reInitNav
        };
    }else{
        return {
            init: init
        }
    }

}());

module.exports = navigationManager;