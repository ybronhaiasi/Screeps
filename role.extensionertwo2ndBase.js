let roleextensionerTwo2ndBase = {
  run: function(creep) {
    if (creep.memory.extracting && _.sum(creep.carry) > 49) {
      creep.memory.extracting = false;
    }

    if (!creep.memory.extracting && 0 == _.sum(creep.carry)) {
      creep.memory.extracting = true;
    }

    if (creep.memory.extracting) {
      let deposit = Game.getObjectById('5b6d443a58f6203d55bb57d5');
      if (creep.withdraw(deposit, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE) {
        creep.moveTo(deposit);
      }
    }
    if (!creep.memory.extracting) {
      let storage = Game.getObjectById('5b6980ba57298d41ba659d87');
      if (creep.transfer(storage, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE) {
        creep.moveTo(storage);
      }
    }
  }
};
module.exports = roleextensionerTwo2ndBase;
