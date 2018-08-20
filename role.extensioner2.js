let roleextensioner2 = {
  run: function(creep) {
    if (creep.pos.x == 19 || creep.pos.y == 12) {
      creep.moveTo(18, 13);
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.harvesting = false;
    }
    if (creep.carry.energy === 0) {
      creep.memory.harvesting = true;
    }

    if (!creep.memory.harvesting) {
      let target = Game.getObjectById('5b6804f590213967e8c189d4');
      if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
      }
    }
    if (creep.memory.harvesting) {
      if (creep.carry.energy < creep.carryCapacity) {
        let withdrawSource = Game.getObjectById('5b615e0fb7d44e6423cb8a80');
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

// let container = Game.getObjectById('5b615e0fb7d44e6423cb8a80');
//     if (container.store[RESOURCE_ENERGY] === 0) {
//       creep.moveTo(19,12);
//     } else {
//       if (creep.memory.depositing && creep.carry.energy === 0) {
//         creep.memory.depositing = false;
//       } else if (
//         !creep.memory.depositing &&
//         creep.carry.energy < creep.carryCapacity
//       ) {
//         creep.memory.depositing = false;
//       } else if (
//         !creep.memory.depositing &&
//         creep.carry.energy === creep.carryCapacity
//       ) {
//         creep.memory.depositing = true;
//       }
//
//       if (creep.memory.depositing) {
//         // creep.say('ext2 dep');
//         var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//           filter: structure => {
//             return (
//               ((structure.structureType == STRUCTURE_EXTENSION ||
//                 structure.structureType == STRUCTURE_SPAWN) &&
//                 structure.energy < structure.energyCapacity) ||
//               (structure.structureType == STRUCTURE_STORAGE &&
//                 structure.store[RESOURCE_ENERGY] < structure.storeCapacity)
//             );
//           }
//         });
//
//         if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//           creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
//         }
//       }
//       if (!creep.memory.depositing) {
//         if (creep.carry.energy < creep.carryCapacity) {
//           let withdrawsource = Game.rooms['W56S57'].lookForAt(
//             'structure',
//             19, 12
//           )[0];
//           if (
//             creep.withdraw(withdrawsource, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE
//           ) {
//             creep.moveTo(withdrawsource, {
//               visualizePathStyle: { stroke: '#ffaa00' }
//             });
//             // creep.say('ext2 withd');
//           }
//         }
//       }
//     }
//   }
// };
