var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();


describe('navigationManager', function() {

    process.env.dev = true;
    var navigationManager = require('../navigationManager.js');

    it('Navigation properties Existence:', function(){
        expect(navigationManager).to.exist;
        expect(navigationManager).to.have.property('init');
        expect(navigationManager).to.have.property('footerSwitch');
        expect(navigationManager).to.have.property('generateMobileNavigation');
        expect(navigationManager).to.have.property('updateReferences');
        expect(navigationManager).to.have.property('navChange');
        expect(navigationManager).to.have.property('testUp');
        expect(navigationManager).to.have.property('testDown');
        expect(navigationManager).to.have.property('moveInDropDown');
        expect(navigationManager).to.have.property('moveOutDropDown');
        expect(navigationManager).to.have.property('dropdownNav');
        expect(navigationManager).to.have.property('createDDown');
        expect(navigationManager).to.have.property('tabNav');
        expect(navigationManager).to.have.property('reInitNav');
    });

    describe('init', function(){
        it('init', function(){});
    });

    describe('footerSwitch', function(){
        it('footerSwitch', function(){});
    });

    describe('generateMobileNavigation', function(){
        it('generateMobileNavigation', function(){});
    });

    describe('updateReferences', function(){
        it('updateReferences', function(){});
    });

    describe('navChange', function(){
        it('navChange', function(){});
    });

    describe('testUp', function(){
        it('testUp', function(){});
    });

    describe('testDown', function(){
        it('testDown', function(){});
    });

    describe('moveInDropDown', function(){
        it('moveInDropDown', function(){});
    });

    describe('moveOutDropDown', function(){
        it('moveOutDropDown', function(){});
    });

    describe('dropdownNav', function(){
        it('dropdownNav', function(){});
    });

    describe('createDDown', function(){
        it('createDDown', function(){});
    });

    describe('tabNav', function(){
        it('tabNav', function(){});
    });

    describe('reInitNav', function(){
        it('reInitNav', function(){});
    });
});