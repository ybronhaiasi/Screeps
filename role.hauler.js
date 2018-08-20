var hauler = {
  run: function(creep) {
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.harvesting = false;
    }
    if (creep.carry.energy === 0) {
      creep.memory.harvesting = true;
    }

    if (!creep.memory.harvesting) {
      let target = Game.getObjectById('5b6987177f6c003fc2903b3b');
      if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
      }
    }
    if (creep.memory.harvesting) {
      if (creep.carry.energy < creep.carryCapacity) {
        let withdrawSource = Game.getObjectById('59f19f7982100e1594f34f59');
        if (
          creep.harvest(withdrawSource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(withdrawSource, {
            visualizePathStyle: { stroke: '#ffaa00' }
          });
        }
      }
    }
  }
};
module.exports = hauler;
