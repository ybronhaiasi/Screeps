var roleBuilder = {
  run: function(creep) {
    if (creep.pos.x == 19 || creep.pos.y == 12) {
      creep.moveTo(20, 9);
    }

    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.building = true;
    }
    if (creep.carry.energy === 0) {
      creep.memory.building = false;
    }

    if (creep.memory.building) {
      // creep.moveTo(flag)
      let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      let closest = creep.pos.findClosestByRange(targets);
      if (closest) {
        if (creep.build(closest) === ERR_NOT_IN_RANGE) {
          creep.moveTo(closest, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }

    if (!creep.memory.building) {
      //       let sources = creep.room.find(FIND_SOURCES);
      //       if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      //         // creep.say('Gathering');
      //         creep.moveTo(sources[0], {
      //           visualizePathStyle: { stroke: '#ffaa00' }
      //         });
      //       }
      //     }
      //   }
      // };
      //   creep.say('ext wthdrw');
      if (creep.carry.energy < creep.carryCapacity) {
        // let withdrawSource = Game.rooms['W56S57'].lookForAt('structure', 19, 12)[0];
        let withdrawSource = Game.getObjectById('5b6804f590213967e8c189d4');

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
module.exports = roleBuilder;
