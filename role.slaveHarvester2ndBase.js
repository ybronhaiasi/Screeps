let slaveHarvester = {
  run: function(creep) {
    if (creep.pos.x !== 9 || creep.pos.y !== 35) {
      creep.moveTo(9, 35);
    } else {
      let sources = creep.room.find(FIND_SOURCES);
      creep.harvest(sources[0]);
    }
  }
};

module.exports = slaveHarvester;

// var roleharvester2ndBase = {
//   run: creep => {
//     if (creep.carry.energy === 0) {
//       creep.memory.depositing = false;
//     }
//     if (creep.carry.energy === creep.carryCapacity) {
//       creep.memory.depositing = true;
//     }
//
//     if (creep.memory.depositing) {
//       var targets = creep.room.find(FIND_STRUCTURES, {
//         filter: structure => {
//           return (
//             (structure.structureType == STRUCTURE_EXTENSION ||
//               structure.structureType == STRUCTURE_SPAWN ||
//               structure.structureType == STRUCTURE_TOWER) &&
//             structure.energy < structure.energyCapacity
//           );
//         }
//       });
//       if (targets) {
//         if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//           creep.moveTo(targets[0], {
//             visualizePathStyle: { stroke: '#ffffff' }
//           });
//         }
//       }
//     }
//     if (!creep.memory.depositing) {
//       if (creep.carry.energy < creep.carryCapacity) {
//         let sources = creep.room.find(FIND_SOURCES);
//         if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//           creep.moveTo(sources[0], {
//             visualizePathStyle: { stroke: '#ffaa00' }
//           });
//         }
//       }
//     }
//   }
// };
// module.exports = roleharvester2ndBase;
