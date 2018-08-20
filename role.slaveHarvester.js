let slaveHarvester = {
  run: function(creep) {
    if (creep.pos.x !== 19 || creep.pos.y !== 12) {
    creep.moveTo(19, 12);
    } else {
     let sources = creep.room.find(FIND_SOURCES);
     creep.harvest(sources[0]);
    }
 }
};

module.exports = slaveHarvester;

// let slaveHarvester = {
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
//     //   creep.say('desposit');
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
//     } else if (!creep.memory.depositing) {
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
// module.exports = slaveHarvester;

// let slaveHarvester = {
//   /** @param {Creep} creep **/
//   run: function(creep) {
//     if (creep.pos.x !== 46 || creep.pos.y !== 4) {
//       creep.moveTo(46, 4);
//     } else {
//       if (creep.carry.energy < creep.carryCapacity) {
//         var sources = creep.room.find(FIND_SOURCES);
//         if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//           creep.say('Gathering');
//           creep.moveTo(sources[0], {
//             visualizePathStyle: { stroke: '#ffaa00' }
//           });
//         }
//       } else {
//         let linkDepot3 = Game.rooms['W55N57'].lookForAt('structure', 45, 5)[0];

//         if (creep.transfer(linkDepot3, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//           creep.moveTo(linkDepot3, {
//             visualizePathSTyle: { stroke: 'fafafa' }
//           });
//         }
//       }
//     }
//   }
// };

// //       let sources = creep.room.find(FIND_SOURCES);
// //       creep.harvest(sources[0]);
// //     }
// //   }
// // };

// module.exports = slaveHarvester;
