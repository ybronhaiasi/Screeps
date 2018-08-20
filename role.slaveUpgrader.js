const slaveUpgrader = {
  run: function(creep) {
    if (creep.pos.x == 42 && creep.pos.y == 19) {
      creep.moveTo(44, 19);
    }
    if (creep.carry.energy === 0) {
      creep.memory.upgrading = false;
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.upgrading = true;
    }

    if (creep.memory.upgrading) {
      let controller = creep.room.controller;
      if (controller) {
        // if (
        // creep.signController(
        //   controller,
        //   'const u = n00b; if (u) {🏳️ || ☠️}'
        // ) == ERR_NOT_IN_RANGE
        // ) {
        creep.moveTo(controller);
      }
      if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(controller, {
          visualizePathStyle: { stroke: '#FF7F50' }
        });
      }
    }
    // }

    if (!creep.memory.upgrading) {
      let closest = creep.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: structure => structure.structureType === STRUCTURE_CONTAINER
      });
      if (closest) {
        if (creep.withdraw(closest, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
          creep.moveTo(closest, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }
  }
};

module.exports = slaveUpgrader;
