var roleScout = {
  run: function(creep) {
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.building = true;
    }
    if (creep.carry.energy === 0) {
      creep.memory.building = false;
    }

    // let flag = Game.flags.Flag3;
    // if (flag) {
    //   if (creep.pos.roomName === flag.pos.roomName) {
    //   }
    // }

    if (creep.memory.building) {
      let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      let closest = creep.pos.findClosestByRange(targets);
      if (closest) {
        if (creep.build(closest) === ERR_NOT_IN_RANGE) {
          creep.moveTo(closest, { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
      // }
      // else {
      //   const path = creep.pos.findPathTo(Game.flags.Flag3);
      //   if (path.length > 0) {
      //     creep.move(path[0].direction);
    }
    // }
    if (!creep.memory.building) {
      if (creep.carry.energy < creep.carryCapacity) {
        // let withdrawSource = Game.rooms['W56S57'].lookForAt('structure', 19, 12)[0];
        let withdrawSource = Game.getObjectById('5b6980ba57298d41ba659d87');

        if (
          creep.withdraw(withdrawSource, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(withdrawSource, {
            visualizePathStyle: { stroke: '#ffaa00' }
          });
          // }
        }
      }
    }
  }
};
//       let sources = creep.room.find(FIND_SOURCES);
//       if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//         creep.moveTo(sources[0], {
//           visualizePathStyle: { stroke: '#ffaa00' }
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
//       if (creep.carry.energy < creep.carryCapacity) {
//         let withdrawsource = Game.rooms['W54N57'].lookForAt(
//           'structure',
//          38, 44
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
