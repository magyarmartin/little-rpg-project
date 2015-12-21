var Warrior = require("../model/characters/warrior.js");
var Priest = require("../model/characters/priest.js");
var Weapon = require("../model/items/weapon.js");
var battle = require("../model/battle.js");

var sword = new Weapon(7,2);
var dagger = new Weapon(5,4);
var magicWand = new Weapon(8,1);

function createCharacter(characterDetails){
    var newCharacter;
    if (characterDetails.type === 'warrior') {
        newCharacter = new Warrior(characterDetails.hp);
    } else {
        newCharacter = new Priest(characterDetails.hp);
    }
    var weaponType = characterDetails.weapon;
    if (weaponType !== undefined) {
        if (weaponType === 'sword'){
            newCharacter.addWeapon(sword);
        } else if (weaponType === 'dagger'){
            newCharacter.addWeapon(dagger);
        } else if (weaponType === 'magicWand'){
            newCharacter.addWeapon(magicWand);
        }
    }
    return newCharacter.id;
}

function getCharacters(){
    
}

module.exports = {
    sword: sword,
    dagger: dagger,
    magicWand: magicWand,
    createCharacter: createCharacter,
    getCharacters: getCharacters
}