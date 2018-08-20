let roleextensioner5 = {
  run: function(creep) {
    if (creep.memory.extracting && _.sum(creep.carry) > 49) {
      creep.memory.extracting = false;
    }

    if (!creep.memory.extracting && 0 == _.sum(creep.carry)) {
      creep.memory.extracting = true;
    }

    if (creep.memory.extracting) {
      let container = Game.getObjectById('5b72999ccad6456b3bc6a376');
      let total = _.sum(container.store);
      if (creep.withdraw(container, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE) {
        creep.moveTo(container);
      }
    }
    if (!creep.memory.extracting) {
      let storage = Game.getObjectById('5b6804f590213967e8c189d4');
      if (creep.transfer(storage, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE) {
        creep.moveTo(storage);
      }
    }
  }
};
module.exports = roleextensioner5;
