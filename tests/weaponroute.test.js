var expect = require("chai").expect;
var Weapon = require("../model/items/weapon.js");
var weapons = require("../routes/weapons");

describe('stringToWeapon()', function() {
        it('should return a weapon in the same type as the parameter', function() {
            var weaponType = 'sword';
            var weapon = weapons.stringToWeapon(weaponType);
            expect(weapon.damage).to.eql(7);
            expect(weapon.defense).to.eql(2);
        });
});