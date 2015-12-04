var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();


describe('basketManager', function() {

    process.env.dev = true;
    var basketManager = require('../basketManager.js');


    it('Basket properties Existence:', function(){
        expect(basketManager).to.exist;
        expect(basketManager).to.have.property('addItem');
        expect(basketManager).to.have.property('removeItem');
        expect(basketManager).to.have.property('getItemCount');
        expect(basketManager).to.have.property('getTotal');
        expect(basketManager).to.have.property('clearBasket');
    });

    describe('Add an Item:', function(){
        it('Adding well formatted product should add', function(){
            var prod = {name: "butter", price: "0.5"};
            basketManager.addItem(prod);
            expect(basketManager.isProductInBasket(prod)).to.be.true;
        });

        it('Adding badly formatted product should NOT add', function(){
            var prod = {name: "butter", price: "myPrice"};
            basketManager.addItem(prod);
            expect(basketManager.isProductInBasket(prod)).to.be.false;
        });
    });

    describe('Remove an item:', function(){
        it('Basket should NOT have prod anymore', function(){
            var prod = {name:"prod", price:"0.5"};
            basketManager.addItem(prod);
            basketManager.removeItem(prod);
            expect(basketManager.isProductInBasket(prod)).to.be.false;
        });

        it('Basket should NOT remove unexisting product', function(){
            var prod = {name:"prod", price:"0.5"};
            basketManager.removeItem(prod);
            expect(basketManager.isProductInBasket(prod)).to.be.false;
        });
    });

    describe('Get how many items:', function(){
        it('Adding 1 product => should have 1 item', function(){
            var prod = {name:"prod", price:"0.5"};
            basketManager.addItem(prod);
            expect(basketManager.getItemCount()).to.equal(1);
        });
    });

    describe('Get the total of the basket:', function(){
        it('Adding product worth 0.5, should return 0.5', function(){
            var prod = {name:"prod", price:"0.5"};
            basketManager.addItem(prod);
            expect(basketManager.getTotal()).to.equal(0.5);
        });
    });

    describe('Empty the basket:', function(){
        it('should have 0 item', function(){
            basketManager.clearBasket();
            expect(basketManager.getItemCount()).to.equal(0);
        });
    });

    // Private property
    describe('Validate the format of a product:', function(){
        it('Return value should be a boolean', function(){
            var prod = {name:"prod", price:"price"};
            expect(basketManager.isProductValid(prod)).to.be.a('boolean');
        });

        it('{} should return false', function(){
            var prod = {};
            expect(basketManager.isProductValid(prod)).to.not.be.ok
        });

        it('{name:"prod"} should return false', function(){
            var prod = {};
            expect(basketManager.isProductValid(prod)).to.not.be.ok;
        });

        it('{name:"prod", price:"price"} should return false', function(){
            var prod = {name:"prod", price:"price"};
            expect(basketManager.isProductValid(prod)).to.not.be.ok;
        });

        it('{name:"prod", price:0.5} should return false', function(){
            var prod = {name:"prod", price:0.5};
            expect(basketManager.isProductValid(prod)).to.be.ok;
        });
    });

    describe('Check if specified product is in basket:', function(){
        it('Should be in basket', function(){
           var prod = {name:"prod", price:"0.5"};
           basketManager.addItem(prod);
           expect(basketManager.isProductInBasket(prod)).to.be.true;
        });

        it('Should NOT be in basket', function(){
           var prod = {name:"prod2", price:"0.5"};
           expect(basketManager.isProductInBasket(prod)).to.be.false;
        });

    });

});