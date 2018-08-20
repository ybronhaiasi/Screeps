const thirdBaseUpgrader = {
  run: creep => {
    if (creep.memory.building && creep.carry.energy === 0) {
      creep.memory.building = false;
    }
    if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
      creep.memory.building = true;
    }

    const path = creep.pos.findPathTo(Game.flags.Flag1);
    if (path.length > 0) {
      creep.move(path[0].direction, {
        visualizePathStyle: { stroke: '#ffffff' }
      });
    } else {
      if (creep.carry.energy < creep.carryCapacity) {
        let sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
          creep.say('Gathering');
          creep.moveTo(sources[0], {
            visualizePathStyle: { stroke: '#ffaa00' }
          });
        }
      } else {
        if (creep.memory.building) {
          let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
          let closest = creep.pos.findClosestByRange(targets);
          if (closest) {
            if (creep.build(closest) === ERR_NOT_IN_RANGE) {
              creep.moveTo(closest, {
                visualizePathStyle: { stroke: '#ffffff' }
              });
            }
          }
        }
      }
    }
  }
};

module.exports = thirdBaseUpgrader;
