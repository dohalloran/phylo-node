var expect = require('chai').expect;
var phyloTest = require('../Tools/Run/MUSCLE/muscle.js');

describe('node-phylo-tests', function () {
    describe('object', function () {
        it('should be an object container', function () {
            expect(phyloTest).to.satisfy(isfunction);

            function isfunction(checkmethod) {
                return typeof checkmethod == 'object';
            }
        });
    });

});
