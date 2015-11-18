var expect = require("chai").expect;
var Battle = require("../model/battle.js");
var Warrior = require("../model/characters/warrior.js");

describe('battle', function(){
    
    var john;
    var theon
    
    beforeEach(function(){
        john = new Warrior(30);
        theon = new Warrior(20);
    });
    
    it('should be an object', function(){
        var battle = new Battle(john, theon);
        expect(battle).to.be.a('object');
    })
    
    describe('getWinner', function() {
        it('should return the winner of the battle', function() {
            var battle = new Battle(john, theon);
            var winner = battle.getWinner();
            expect(winner.id).to.eql(john.id);
        })
        
        it('should return the the only warrior if only one warrior was given in the battle parameter', function() {
            var battle = new Battle(john);
            var winner = battle.getWinner();
            expect(winner.id).to.eql(john.id);
        })
        
        it('should return undefuned if 0 arguments are given', function() {
            var battle = new Battle();
            expect(battle.getWinner()).to.be.a('undefined');
        })
    })
})