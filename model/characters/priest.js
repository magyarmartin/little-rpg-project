var Warrior = require("./warrior.js");

function createPriest(hp) {
    var priest = new Warrior(hp);
    priest.healingPoints = 1;
    priest.defaultHP = hp;
    
    function heal(){
        priest.hp = priest.hp === priest.defaultHP ? hp : hp + priest.healingPoints;
    }
    
    var attack = priest.attack;
    
    priest.attack = function(otherWarrior) {
        attack(otherWarrior);
        heal();
    }
    
    return priest;
}



module.exports = createPriest;