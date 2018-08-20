const roleRepairer = {
  run: creep => {
    if (creep.memory.repairing && creep.carry.energy === 0) {
      creep.memory.repairing = false;
      creep.say('rpr wthdrw');
    } else if (
      !creep.memory.repairing &&
      creep.carry.energy === creep.carryCapacity
    ) {
      creep.memory.repairing = true;
      creep.say('rpr fix');
    }

    if (creep.memory.repairing) {
      creep.say('Rpr fix');
      let targets = creep.room.find(FIND_STRUCTURES, {
        filter: structure => {
          return (
            (structure.structureType == STRUCTURE_CONTAINER ||
              structure.structureType == STRUCTURE_ROAD ||
              structure.structureType == STRUCTURE_RAMPART ||
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
module.exports = roleRepairer;
