// Two fighters, one winner

// from Codewars
// URL: https://www.codewars.com/kata/two-fighters-one-winner/train/javascript

// Create a function that returns the name of the winner
// in a fight between two fighters.

// Each fighter takes turns attacking the other
// and whoever kills the other first is victorious.
// Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance.
// See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python)
// will be integers larger than 0. You can mutate the Fighter objects.

module.exports = {
  Fighter: function(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() {
      return this.name;
    };
  },
  declareWinner: function(fighter1, fighter2, firstAttacker) {
    const fight = (attacker, defender) => {
      defender.health -= attacker.damagePerAttack;
      if (defender.health <= 0) return attacker.name;
      else return fight(defender, attacker);
    };

    switch (firstAttacker) {
      case fighter1.name:
        return fight(fighter1, fighter2);
      default:
        return fight(fighter2, fighter1);
    }
  }
};
