var rolerepairer3rdBase = {
  run: function(creep) {
    if (creep.carry.energy === 0) {
      creep.memory.repairing = false;
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.repairing = true;
    }

    if (creep.memory.repairing) {
      creep.say('Rpr fix');
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: structure => {
          return (
            (structure.structureType == STRUCTURE_RAMPART ||
              structure.structureType == STRUCTURE_CONTAINER ||
              structure.structureType == STRUCTURE_ROAD ||
              structure.structureType == STRUCTURE_WALL) &&
            structure.hits < structure.hitsMax
          );
        }
      });

      targets.sort((a, b) => a.hits - b.hits);

      if (targets.length) {
        if (creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], {
            visualizePathStyle: { stroke: '#ffaa00' }
          });
          creep.say('Rpr fix');
        }
      }
    }
    if (!creep.memory.repairing) {
      if (creep.carry.energy < creep.carryCapacity) {
        let withdrawSource = Game.getObjectById('59f19f5282100e1594f34c3c');
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
module.exports = rolerepairer3rdBase;
