var expect = require("chai").expect;

var battle = require("../routes/battle.js");
var heroes = require("../routes/heroes.js");

describe('battle', function() {
    
    afterEach(function(){
        heroes.deleteHeroes();
    })
    
    it('should return the id of the winner character', function() {
        var hero1 = heroes.createCharacter({type: 'warrior', hp: 20});
        var hero2 = heroes.createCharacter({type: 'warrior', hp: 30});
        var winnerId = battle(hero1, hero2).id;
        expect(winnerId).to.eql(hero2);
    });
});
