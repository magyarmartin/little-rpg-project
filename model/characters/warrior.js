'use strinct';

var uuid = 1;

function createWarrior(hp) {
    var warrior = {
        id: uuid++,
        hp: validateHP(hp),
        attackPoint: 1,
        defensePoint: 0,
        getHP: function(){
            return this.hp;
        },
        attack: function(otherWarrior){
            var actualDamage = this.attackPoint - otherWarrior.defensePoint;
            otherWarrior.hp  -= actualDamage > 0 ? actualDamage : 0;
        },
        addWeapon: function(weapon){
            this.attackPoint = 1 + weapon.damage;
            this.defensePoint = weapon.defense;
        }
    }
    return warrior
}

function validateHP(hp){
    var validHP = hp <= 30 ? hp : 30;
    validHP = validHP > 0  ? validHP : 30;
    return validHP;
}

module.exports = createWarrior;