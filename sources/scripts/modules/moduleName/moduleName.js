/**
* MODULE NAME
* @description Placeholder
* @module moduleName
*
* @todo Create basket object (sessionStorage?)
*
* @example
* productObj: {
*   item: "bread",
*    price: 0.5
* }
*/
var moduleName = (function() {

    var insideMethodeCoresponding = function(){
        return;
    }

    // Node variable set in gulp.js
    // to expose all methods
    /* istanbul ignore else */
    if( process.env.dev ){
        return{
            outSideMethodeName: insideMethodeCoresponding
        };
    }else{
        // Exposed to public
        return {
            outSideMethodeName: insideMethodeCoresponding
        };
    }

}());

module.exports = moduleName;