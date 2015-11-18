'use strinct';

function battle(firstHero, secondHero){
    if(arguments.length === 2){
        while(firstHero.getHP() > 0 && secondHero.getHP() > 0){
            firstHero.attack(secondHero);
            secondHero.attack(firstHero);
        }
        
        var winner = firstHero.getHP() > secondHero.getHP() ? firstHero : secondHero;
    } else if (arguments.length === 1) {
        winner = firstHero;
    }
    
    var battle = {
        getWinner: function getWinner(){
            return winner;
        }
    }
    
    return battle;
}

module.exports = battle;
