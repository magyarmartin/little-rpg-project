var expect = require("chai").expect;
var heroes = require("../routes/heroes.js");
var Priest = require("../model/characters/priest.js");
var Warrior = require("../model/characters/warrior.js");

describe('heroes', function() {
    
    afterEach(function(){
        heroes.deleteHeroes();
    })
    
    describe('createCharacter()', function() {
        it('should create a Warrior or a Priest instance and return its unique id', function(){
            var characterId = heroes.createCharacter({type: 'warrior', hp: 20});
            expect(characterId).to.be.a('number');
        });
    });
    describe('getCharacters()', function() {
        it('sholud return a list of characters', function(){
            heroes.createCharacter({type: 'warrior', hp: 20});
            heroes.createCharacter({type: 'priest', hp: 30, weapon: 'sword'});
            heroes.createCharacter({type: 'warrior', hp: 24, weapon: 'dagger'});
            var characterList = heroes.getCharacters();
            expect(characterList).to.have.length(3);
        });
    });
    describe('getCharacter()', function() {
        it('sholud return a character with the given id', function(){
            var id = heroes.createCharacter({type: 'warrior', hp: 20});
            var character = heroes.getCharacter(id);
            expect(character).to.be.a('object');
            expect(character.id).to.eql(id);
        });
    });
    
})