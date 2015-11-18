var expect = require("chai").expect;
var Weapon = require("../model/items/weapon.js");

describe('weapon', function(){
    var weapon = new Weapon(3,5);
    
    it('should have 3 damage points', function() {
        expect(weapon.damage).to.eql(3);
    });
    it('should have 5 defense points', function() {
        expect(weapon.defense).to.eql(5);
    });
})