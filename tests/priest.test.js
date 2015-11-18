var expect = require("chai").expect;
var Priest = require("../model/characters/priest.js");

describe('priest', function() {
    var thoros = new Priest(5);
    
    it('should have healingPoints attribute', function(){
        expect(thoros.healingPoints).to.not.eql(null);
    })
    
    it('should have a defaultHP property with the value of the creation hp', function() {
        expect(thoros.defaultHP).to.be.eql(5);
    })
    
    describe('attack', function(){
        var melisandre;
        before(function(){
            melisandre = new Priest(10);
        });
        it('should increase the hp when it is lower than it was in the creation', function() {
            thoros.hp = thoros.hp-1;
            var hp = thoros.getHP();
            thoros.attack(melisandre);
            expect(thoros.getHP()).to.be.above(hp);
        });
        it('should not increase the hp when the hp is equal to defaultHP', function() {
            var hp = thoros.getHP();
            thoros.attack(melisandre);
            expect(thoros.getHP()).to.be.eql(hp);
        })
    });
})