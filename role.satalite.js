var rolesatalite = {
  run: function(creep) {
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.building = true;
    }
    if (creep.carry.energy === 0) {
      creep.memory.building = false;
    }

    if (creep.memory.building) {
      let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      let closest = creep.pos.findClosestByRange(targets);
      if (closest) {
        if (creep.build(closest) === ERR_NOT_IN_RANGE) {
          creep.moveTo(closest, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }

    if (!creep.memory.building) {
      if (creep.carry.energy < creep.carryCapacity) {
        let withdrawSource = Game.getObjectById('59f19f7982100e1594f34f57');
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
module.exports = rolesatalite;
