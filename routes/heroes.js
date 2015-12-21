var Warrior = require("../model/characters/warrior.js");
var Priest = require("../model/characters/priest.js");
var weapons = require("./weapons.js");
var battle = require("../model/battle.js");
var router = require("express").Router();

var characters = [];

function createCharacter(characterDetails){
    var newCharacter;
    if (characterDetails.type === 'warrior') {
        newCharacter = new Warrior(characterDetails.hp);
    } else {
        newCharacter = new Priest(characterDetails.hp);
    }
    var weaponType = characterDetails.weapon;
    var weapon = weapons.stringToWeapon(weaponType);
    if ( weapon !== undefined ){
        newCharacter.addWeapon(weapon);
    }
    characters.push(newCharacter);
    return newCharacter.id;
}

function getCharacters(){
    return characters;
}

function getCharacter(id){
    var characters = getCharacters();
    for( var i in characters ) {
        if ( characters[i].id === id ){
            return characters[i];
        }
    }
}

function deleteHeroes(){
    characters = [];
}

module.exports = {
    createCharacter: createCharacter,
    getCharacters: getCharacters,
    getCharacter: getCharacter,
    deleteHeroes: deleteHeroes,
}
