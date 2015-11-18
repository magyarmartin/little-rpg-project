var expect = require("chai").expect;
var Warrior = require("../model/characters/warrior.js");
var Weapon = require("../model/items/weapon.js");

describe('warrior', function(){
    var john;
    
    before(function(){
        john = new Warrior();
    })
    
    it('should be an object', function() {
        expect(john).to.be.a('object');
    })
    
    it('should have unique id', function(){
        var theon = new Warrior(20);
        expect(john.id).to.not.eql(theon.id);
    })
    
    describe('getHP', function() {
        
        it('should return 30 if no parameter are give', function(){
            expect(john.getHP()).to.eql(30);
        });
        
        it('shold return the same hp like the given parameter', function(){
            john = new Warrior(20);
            expect(john.getHP()).to.eql(20);
        });
        
        it('should return 30 if the parameter is greater than 30 or lesser than 0', function() {
            john = new Warrior(50);
            expect(john.getHP()).to.eql(30);
            john = new Warrior(-10);
            expect(john.getHP()).to.eql(30);
        });
    });
    
    describe('attack', function(){
        it('should reduce the other warrior HP by 1', function(){
            john = new Warrior(30);
            var theon = new Warrior(20);
            john.attack(theon);
            expect(theon.getHP()).to.eql(19);
        });
    });
    
    describe('addWeapon', function() {
        it("should increase the warrior's attackPoint by the damage of the weapon", function() {
            john = new Warrior(20);
            var dagger = new Weapon(4);
            john.addWeapon(dagger);
            expect(john.attackPoint).to.eql(1+dagger.damage);
            var sword = new Weapon(7);
            john.addWeapon(sword);
            expect(john.attackPoint).to.eql(1+sword.damage);
        });
        
        it('should increase the defense points of the warrior', function() {
            john = new Warrior(20);
            var dagger = new Weapon(3,4);
            john.addWeapon(dagger);
            expect(john.defensePoint).to.eql(dagger.defense);
        })
    })
})