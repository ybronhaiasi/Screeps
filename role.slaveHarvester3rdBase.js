let roleharvester2ndBase = {
  run: creep => {
    if (creep.carry.energy === 0) {
      creep.memory.depositing = false;
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.depositing = true;
    }

    if (creep.memory.depositing) {
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: structure => {
          return (
            (structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_SPAWN ||
              structure.structureType == STRUCTURE_TOWER) &&
            structure.energy < structure.energyCapacity
          );
        }
      });
      if (targets) {
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], {
            visualizePathStyle: { stroke: '#ffffff' }
          });
        }
      } else {
        let target = Game.getObjectById('5b72d77d127ab96b4f60e06c');
        if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }
    if (!creep.memory.depositing) {
      if (creep.carry.energy < creep.carryCapacity) {
        let sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[1], {
            visualizePathStyle: { stroke: '#ffaa00' }
          });
        }
      }
    }
  }
};
module.exports = roleharvester2ndBase;
