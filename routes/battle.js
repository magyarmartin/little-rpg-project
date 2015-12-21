var hero = require("../model/characters/warrior.js");
var heroes = require("./heroes");
var Battle = require("../model/battle.js");

function battle(firstHeroId, secondHeroId){
    var firstHero = heroes.getCharacter(firstHeroId);
    var secondHero = heroes.getCharacter(secondHeroId);
    var battle = new Battle(firstHero, secondHero);
    return battle.getWinner();
}

module.exports = battle;