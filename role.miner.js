const roleminer = {
  run: function(creep) {
    if (creep.memory.extracting && _.sum(creep.carry) > 6) {
      creep.memory.extracting = false;
    }

    if (!creep.memory.extracting && 0 == _.sum(creep.carry)) {
      creep.memory.extracting = true;
    }

    if (creep.memory.extracting) {
      let mine = Game.getObjectById('59f1c0cd7d0b3d79de5effaa');

      if (creep.harvest(mine) == ERR_NOT_IN_RANGE) {
        creep.moveTo(mine);
      } else {
        let deposit = Game.getObjectById('5b73cee257298d41ba69713a');
        if (creep.harvest(mine) == ERR_NOT_IN_RANGE) {
          creep.moveTo(mine);
        }
      }
    }
    if (!creep.memory.extracting) {
      let storage = Game.getObjectById('5b72999ccad6456b3bc6a376');
      let total = _.sum(storage.store);
      if (total < storage.storeCapacity) {
        if (creep.transfer(storage, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE) {
          creep.moveTo(storage);
        }
      }
    }
  }
};

//     if (creep.memory.extracting && _.sum(creep.carry) === 50) {
//       creep.memory.extracting = false;
//     }

//     if (!creep.memory.extracting && 0 == _.sum(creep.carry)) {
//       creep.memory.extracting = true;
//     }

//     if (creep.memory.extracting) {
//       let source = Game.getObjectById('5b207f1fc9146e7a0e59ff99');
//       if (creep.withdraw(source, RESOURCE_LEMERGIUM) === ERR_NOT_IN_RANGE) {
//         creep.moveTo(source);
//       }
//     }
//     if (!creep.memory.extracting) {
//       let storage = Game.getObjectById('5b468e41ed370446e34c09e5');
//       if (creep.transfer(storage, RESOURCE_LEMERGIUM) === ERR_NOT_IN_RANGE) {
//         creep.moveTo(storage);
//       }
//     }
//   }
// };

module.exports = roleminer;
