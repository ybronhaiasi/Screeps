let roleScout = {
  run: function(creep) {
    if (creep.memory.upgrading && creep.carry.energy === 0) {
      creep.memory.upgrading = false;
    }
    if (!creep.memory.upgrading && creep.carry.energy === creep.carryCapacity) {
      creep.memory.upgrading = true;
    }
    if (creep.memory.upgrading) {
      const path = creep.pos.findPathTo(Game.flags.Flag3);
      if (path.length > 0) {
        creep.move(path[0].direction);
      } else {
        let controller = creep.room.controller;
        if (controller) {
          if (
            creep.signController(
              controller,
              'The key to everything is patience. You get the chicken by hatching the egg, not by smashing it.'
            ) === ERR_NOT_IN_RANGE
          ) {
            creep.moveTo(controller);
          }
          if (creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
            creep.moveTo(controller, {
              visualizePathStyle: { stroke: '$ffaa00 ' }
            });
          }
        }
      }
    }
    if (!creep.memory.upgrading) {
      if (creep.carry.energy < creep.carryCapacity) {
        let withdrawSource = Game.getObjectById('5b6980ba57298d41ba659d87');
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

//       const path = creep.pos.findPathTo(Game.flags.Flag3);
//       const sources = creep.room.find(FIND_SOURCES);
//       if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
//         // creep.say('Gathering');
//         creep.moveTo(sources[0], {
//           visualizePathSTyle: { stroke: '#ffaa00' }
//         });
//       }
//     }
//   }
// };

module.exports = roleScout;

// var roleBuilder3rdBase = {

//   run: function(creep) {
//     if (creep.carry.energy === creep.carryCapacity) {
//       creep.memory.building = true;
//     }
//     if (creep.carry.energy === 0) {
//       creep.memory.building = false;
//     }

//     if (creep.memory.building) {
//       let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
//       let closest = creep.pos.findClosestByRange(targets);
//       if (closest) {
//         if (creep.build(closest) === ERR_NOT_IN_RANGE) {
//           creep.moveTo(closest, { visualizePathStyle: { stroke: '#ffffff' } });
//         }
//       }
//     }

//     if (!creep.memory.building) {
//     //   if (creep.carry.energy < creep.carryCapacity) {
//     //     var sources = creep.room.find(FIND_SOURCES);
//     //     if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
//     //       // creep.say('Gathering');
//     //       creep.moveTo(sources[1], {
//     //         visualizePathStyle: { stroke: '#ffaa00' }
//     //       });
//     //     }
//     //   }
//     // }
//       if (creep.carry.energy < creep.carryCapacity) {
//         let withdrawsource = Game.rooms['W54N57'].lookForAt(
//           'structure',
//          35, 32
//         )[0];
//         if (
//           creep.withdraw(withdrawsource, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE
//         ) {
//           creep.moveTo(withdrawsource, {
//             visualizePathStyle: { stroke: '#ffaa00' }
//           });
//         }
//       }
//     }
//   }
// };
// module.exports = roleBuilder3rdBase;

// var rolebuilder2ndBase = {

//   run: function(creep) {

//     if (creep.carry.energy === creep.carryCapacity) {
//       creep.memory.building = true;
//     }
//     if (creep.carry.energy === 0) {
//       creep.memory.building = false;
//     }
//     if (creep.memory.building) {
//       const path = creep.pos.findPathTo(Game.flags.Flag3);
//       if (path.length > 0) {
//   creep.move(path[0].direction);
//       }
//       let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
//       let closest = creep.pos.findClosestByRange(targets);
//       if (closest) {
//         if (creep.build(closest) === ERR_NOT_IN_RANGE) {
//         }
//       }
//     }
//     if (!creep.memory.building) {
//         var sources = creep.room.find(FIND_SOURCES);
//         if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//           creep.moveTo(sources[0], {
//             visualizePathStyle: { stroke: '#ffaa00' }
//           });
//         }
//       }

//   }
// };
// module.exports = rolebuilder2ndBase;

//  run: creep => {
// if (creep.carry.energy === 0) {
//   creep.memory.depositing = false;
// } else if (creep.carry.energy === creep.carryCapacity) {
//   creep.memory.depositing = true;
// }

// if (creep.memory.depositing) {
//   creep.say('ext dpst');
//   let target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//     filter: structure => {
//       return (
//         (structure.structureType == STRUCTURE_TOWER) &&
//         structure.energy < structure.energyCapacity
//       );
//     }
//   });
//   if (target) {
//     if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//       creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
//     }

//   }
// }
// if (!creep.memory.depositing) {
