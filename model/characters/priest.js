var Warrior = require("./warrior.js");

function createPriest(hp) {
    var priest = new Warrior(hp);
    priest.healingPoints = 1;
    priest.defaultHP = hp;
    
    function heal(){
        if(priest.hp !== priest.defaultHP || 0){
            priest.hp += priest.healingPoints;
        }
    }
    
    var attack = priest.attack;
    
    priest.attack = function(otherWarrior) {
        var actualDamage = this.attackPoint - otherWarrior.defensePoint;
        otherWarrior.hp  -= actualDamage > 0 ? actualDamage : 0;
        heal();
    }
    
    return priest;
}



module.exports = createPriest;