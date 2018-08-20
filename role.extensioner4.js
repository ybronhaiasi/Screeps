// let roleextensioner4 = {
//   run: function(creep) {
//     if (creep.memory.extracting && _.sum(creep.carry) > 49) {
//       creep.memory.extracting = false;
//     }
//
//     if (!creep.memory.extracting && 0 == _.sum(creep.carry)) {
//       creep.memory.extracting = true;
//     }
//
//     if (creep.memory.extracting) {
//       let deposit = Game.getObjectById('5b73cee257298d41ba69713a');
//       if (creep.withdraw(deposit, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE) {
//         creep.moveTo(deposit);
//       }
//     }
//     if (!creep.memory.extracting) {
//       let storage = Game.getObjectById('5b6804f590213967e8c189d4');
//       if (creep.transfer(storage, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE) {
//         creep.moveTo(storage);
//       }
//     }
//   }
// };
// module.exports = roleextensioner4;
let roleextensioner2 = {
  run: function(creep) {
    if (creep.pos.x == 42 || creep.pos.y == 19) {
      creep.moveTo(42, 19);
    }
    if (creep.carry.energy === creep.carryCapacity) {
      creep.memory.harvesting = false;
    }
    if (creep.carry.energy === 0) {
      creep.memory.harvesting = true;
    }

    if (!creep.memory.harvesting) {
      let target = Game.getObjectById('5b62b03d2a22fc6800154a8a');
      if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
      }
    }
    if (creep.memory.harvesting) {
      if (creep.carry.energy < creep.carryCapacity) {
        let withdrawSource = Game.getObjectById('5b711754e4055e3fc3e2aa62');
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
