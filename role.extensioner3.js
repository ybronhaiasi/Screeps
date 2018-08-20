let roleextensioner2 = {
  run: function(creep) {
    if (creep.pos.x == 19 || creep.pos.y == 12) {
      creep.moveTo(18, 13);
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.harvesting = false;
    }
    if (creep.carry.energy === 0) {
      creep.memory.harvesting = true;
    }

    if (!creep.memory.harvesting) {
      let target = Game.getObjectById('5b6804f590213967e8c189d4');
      if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
      }
    }
    if (creep.memory.harvesting) {
      if (creep.carry.energy < creep.carryCapacity) {
        let withdrawSource = Game.getObjectById('5b6854d979a8fd3d48ed89da');
        if (
          creep.withdraw(withdrawSource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(withdrawSource, {
            visualizePathStyle: { stroke: '#ffaa00' }
          });
        }
      }
    }
  }
};
module.exports = roleextensioner2;
