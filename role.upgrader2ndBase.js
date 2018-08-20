const Upgrader2ndBase = {
  run: function(creep) {
    if (creep.memory.upgrading && creep.carry.energy === 0) {
      creep.memory.upgrading = false;
    }
    if (!creep.memory.upgrading && creep.carry.energy === creep.carryCapacity) {
      creep.memory.upgrading = true;
    }

    if (creep.memory.upgrading) {
      let controller = creep.room.controller;
      if (controller) {
        if (
          creep.signController(
            controller,
            // 'I not, but curious that you and Bigred1 started here the same time with the same Symbol and running the same exact code'
            'const u = n00b; if (u) {🏳️ || ☠️}'
          ) == ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(controller);
        }
        if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(controller, {
            visualizePathStyle: { stroke: '#FF7F50' }
          });
        }
      }
    }
    if (!creep.memory.upgrading) {
      let withdrawSource = Game.getObjectById('5b6d4a1253dd664061d315f5');

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

//       let sources = creep.room.find(FIND_SOURCES);
//       if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
//         creep.moveTo(sources[1], {
//           visualizePathStyle: { stroke: '#ffaa00' }
//         });
//       }
//     }
//   }
// };

module.exports = Upgrader2ndBase;
