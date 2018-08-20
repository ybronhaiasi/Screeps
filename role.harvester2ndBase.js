var roleharvester2ndBase = {
  run: creep => {
    if (creep.carry.energy === 0) {
      creep.memory.depositing = false;
    } else if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.depositing = true;
    }

    if (creep.memory.depositing) {
      creep.say('ext dpst');
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: structure => {
          //   let target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          //     filter: structure => {
          return (
            (!structure.structureType == STRUCTURE_EXTENSION ||
              !structure.structureType == STRUCTURE_SPAWN ||
             !structure.structureType == STRUCTURE_LINK ||
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
        } else {
          let target = Game.getObjectById('5b51ca1fd761094b26622671');
          if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
          }
        }
      }
    }

    creep.say('ext wthdrw');
    if (creep.carry.energy < creep.carryCapacity) {
      withdrawSource = Game.rooms['W54N57'].lookForAt('structure', 35, 32)[0];
      if (
        creep.withdraw(withdrawSource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE
      ) {
        creep.moveTo(withdrawSource, {
          visualizePathStyle: { stroke: '#ffaa00' }
        });
      }
    }
  }
};

module.exports = roleharvester2ndBase;

//     if (!creep.memory.depositing) {
//       if (creep.carry.energy < creep.carryCapacity) {
//      let sources = creep.room.find(FIND_SOURCES);
//       if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//         creep.say('Gathering');
//         creep.moveTo(sources[0], {
//           visualizePathStyle: { stroke: '#ffaa00' }
//         });
//       }

//   }

//   run: creep => {
//     if (creep.memory.depositing && creep.carry.energy === 0) {
//       creep.memory.depositing = false;
//     } else if (
//       !creep.memory.depositing &&
//       creep.carry.energy < creep.carryCapacity
//     ) {
//       creep.memory.depositing = false;
//     } else if (
//       !creep.memory.depositing &&
//       creep.carry.energy === creep.carryCapacity
//     ) {
//       creep.memory.depositing = true;
//     }

//     if (creep.memory.depositing) {
//       creep.say('desposit');
//       var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//         filter: structure => {
//           return (
//             (structure.structureType == STRUCTURE_EXTENSION ||
//               structure.structureType == STRUCTURE_TOWER ||
//               structure.structureType == STRUCTURE_SPAWN) &&
//             structure.energy < structure.energyCapacity
//           );
//         }
//       });

//       if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//         creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
//       }
//     }
//     if (!creep.memory.depositing) {
//       let sources = creep.room.find(FIND_SOURCES);
//       if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//         creep.say('Gathering');
//         creep.moveTo(sources[0], {
//           visualizePathStyle: { stroke: '#ffaa00' }
//         });
//       }
//     }
//   }
// };
