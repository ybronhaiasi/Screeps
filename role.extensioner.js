let roleextensioner = {
  run: creep => {
    if (creep.pos.x == 19 || creep.pos.y == 12) {
      creep.moveTo(18, 13);
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
      } else {
        let target = Game.getObjectById('');
        if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }
    if (!creep.memory.depositing) {
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
        } else {
          let withdrawSource = Game.getObjectById('');

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
  }
};

module.exports = roleextensioner;

//     if (creep.carry.energy === 0) {
//       creep.memory.depositing = false;
//     } else if (creep.carry.energy === creep.carryCapacity) {
//       creep.memory.depositing = true;
//     }

//     if (creep.memory.depositing) {
//       creep.say('ext dpst');
//       let target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//         filter: structure => {
//           return (
//             (structure.energy < structure.energyCapacity &&
//             structure.structureType == STRUCTURE_EXTENSION ||
//              structure.structureType == STRUCTURE_SPAWN

//           );
//         }
//       });
//       if (target) {
//         if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//           creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
//         }
//       } else {
//         let target = Game.getObjectById('5b615e0fb7d44e6423cb8a80');
//         if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//           creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
//         }
//       }
//     }
//     if (!creep.memory.depositing) {
//       creep.say('ext wthdrw');
//           if (creep.carry.energy < creep.carryCapacity) {
//         withdrawSource = Game.rooms['W56S57'].lookForAt('structure',19, 12)[0];
//         if (
//           creep.withdraw(withdrawSource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE
//         ) {
//           creep.moveTo(withdrawSource, {
//             visualizePathStyle: { stroke: '#ffaa00' }
//           });
//         }
//       }
//     }
//   }
// };

// module.exports = roleextensioner;
