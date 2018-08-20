var rolerepairer2ndBase = {
  run: function(creep) {
    if (creep.carry.energy === 0) {
      creep.memory.repairing = false;
      //   creep.say('rpr wthdrw');
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.repairing = true;
      //   creep.say('rpr wthdrw')
    }

    //   let target = Game.getObjectById('5b4b22896cc126287f52b06f');
    if (creep.memory.repairing) {
      creep.say('Rpr fix');
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: structure => {
          return (
            (structure.structureType == STRUCTURE_RAMPART ||
              structure.structureType == STRUCTURE_CONTAINER ||
              structure.structureType == STRUCTURE_ROAD) &&
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
      let withdrawsource = Game.getObjectById('5b6980ba57298d41ba659d87');
      if (creep.withdraw(withdrawsource, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(withdrawsource, {
          visualizePathStyle: { stroke: '#ffaa00' }
        });
      }
      // }
      //       if (creep.carry.energy < creep.carryCapacity) {
      //         var sources = creep.room.find(FIND_SOURCES);
      //         if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
      //           // creep.say('Gathering');
      //           creep.moveTo(sources[1], {
      //             visualizePathStyle: { stroke: '#ffaa00' }
      //           });
    }
  }
  // }
  // }
};
module.exports = rolerepairer2ndBase;
