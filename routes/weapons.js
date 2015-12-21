var Weapon = require("../model/items/weapon.js");

var sword = new Weapon(7,2);
var dagger = new Weapon(5,4);
var magicWand = new Weapon(8,1);

function stringToWeapon(weaponType){
    if (weaponType !== undefined) {
        if (weaponType === 'sword'){
            return sword;
        } else if (weaponType === 'dagger'){
            return dagger;
        } else if (weaponType === 'magicWand'){
            return magicWand;
        }
    } else {
        return undefined;
    }
}


module.exports = {
    stringToWeapon: stringToWeapon
}