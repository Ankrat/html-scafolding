/**
* BASKET MANAGER
* @description Add / Remove / Count... toolbelt for the shopping basket to be store in javascript
* @module basketManager
*
* @todo Create basket object (sessionStorage?)
*
* @example
* productObj: {
*   item: "bread",
*    price: 0.5
* }
*/
var basketManager = (function() {

    // Private
    var _ = require('../../thirdparty/underscore.min.js');
    var basket = [];

    // productObj:
    // {
    //   item: "bread",
    //   price: 0.5
    // }

    /**
    * @name isProductValid
    * @function
    * @static
    *
    * @param productObj {JSON} product key/value pairs
    * @return {Boolean}
    *
    * @description Check if productObj has all key:value pairs?
    *
    */
    function isProductValid(productObj) {
        if( productObj && productObj.name && productObj.price ){
            if( !parseFloat(productObj.price) ){
                return false;
            }else{
                return true;
            }
        }else{
            return false;
        }
    }


    /**
    * @name isProductInBasket
    * @function
    * @static
    *
    * @param productObj {JSON} product key/value pairs
    * @return {Boolean}
    *
    * @description Check if an item is already in the basket
    *
    */
    function isProductInBasket(productObj) {
        return _.contains(basket, productObj);
    }

    /**
    * @name addItem
    * @function
    * @static
    *
    * @param productObj {JSON} product key/value pairs
    *
    * @description Add an element to the basket
    *
    */
    function addItem(productObj) {

        if( this.isProductValid(productObj) ){
            basket.push(productObj);
        }else{
            console.log("Error while adding product ", productObj);
            console.log("Check the format : { item: String, price: Float as String or Float}");
        }
        return;
    }

    /**
    * @name removeItem
    * @function
    * @static
    *
    * @param productObj {JSON} product key/value pairs
    *
    * @description Remove an item from the basket
    *
    */
    function removeItem(productObj) {
        if(isProductInBasket){
            basket = _.reject(basket, function( elem ){
                        return elem = productObj;
                    });
        }
        return;
    }

    /**
    * @name clearBasket
    * @function
    * @static
    *
    *
    * @description Empty the basket
    * NOTE => look for references in Global object?
    *
    */
    function clearBasket() {
        basket = [];
        return;
    }

    /**
    * @name getItemCount
    * @function
    * @static
    *
    * @return {Integer}
    *
    * @description Return the number of item in the basket
    *
    */
    function getItemCount() {
        // _.each(basket, function(item) {
        //     console.log("item name = ", item.item);
        // });
        return parseInt(basket.length);
    }

    /**
    * @name getTotal
    * @function
    * @static
    *
    * @return {Float}
    *
    * @description Return the total
    *
    */
    function getTotal() {
        var q = this.getItemCount(),
            p = 0;

        while (q--) {
            p += parseFloat(basket[q].price);
        }
        return parseFloat(p);
    }


    // function basketManagerTest(){
    //     return{
    //         isProductValid    : isProductValid,
    //         isProductInBasket : isProductInBasket,
    //         addItem           : addItem,
    //         removeItem        : removeItem,
    //         clearBasket       : clearBasket,
    //         getItemCount      : getItemCount,
    //         getTotal          : getTotal
    //     };
    // }

    // Node variable set in gulp.js
    // to expose all methods
    /* istanbul ignore else */
    if( process.env.dev ){
        return{
            isProductValid    : isProductValid,
            isProductInBasket : isProductInBasket,
            addItem           : addItem,
            removeItem        : removeItem,
            clearBasket       : clearBasket,
            getItemCount      : getItemCount,
            getTotal          : getTotal
        };
    }else{
        // Exposed to public
        return {
            addItem: addItem,
            removeItem: removeItem,
            getItemCount: getItemCount,
            getTotal: getTotal,
            clearBasket: clearBasket
        };
    }


}());


module.exports = basketManager;