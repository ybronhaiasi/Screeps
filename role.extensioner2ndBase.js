let roleextensioner2 = {
  run: creep => {
    if (creep.pos.x == 9 || creep.pos.y == 35) {
      creep.moveTo(10, 34);
    }
    if (creep.carry.energy === 0) {
      creep.memory.depositing = false;
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.depositing = true;
    }

    if (creep.memory.depositing) {
      //   creep.say('ext dpst');
      let target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: structure => {
          return (
            (structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_SPAWN ||
              structure.structureType == STRUCTURE_TOWER) &&
            structure.energy < structure.energyCapacity
          );
        }
      });
      if (target) {
        if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }
    if (!creep.memory.depositing) {
      let withdrawSource = Game.getObjectById('5b6d443a58f6203d55bb57d5');
      if (withdrawSource.store[RESOURCE_ENERGY] === 0) {
        withdrawSource = Game.getObjectById('5b6980ba57298d41ba659d87');
      }
      if (creep.carry.energy < creep.carryCapacity) {
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
