// const Fighter3 = {
//   run: creep => {
//     let closestHostile;
//     closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
//
//     let flag20 = Game.flags.Flag20;
//
//     let flag1 = Game.flags.wayPoint1;
//
//     let flag2 = Game.flags.wayPoint2;
//
//     let flag3 = Game.flags.wayPoint3;
//
//     let flag4 = Game.flags.wayPoint4;
//
//     let flag5 = Game.flags.wayPoint5;
//
//     // let flag6 = Game.flags.wayPoint6;
//
//     let flag7 = Game.flags.wayPoint7;
//
//     let flag8 = Game.flags.wayPoint8;
//
//     let flag9 = Game.flags.wayPoint9;
//
//     let flag10 = Game.flags.wayPoint10;
//
//     let flag11 = Game.flags.attackFlag10;
//
//     if (creep.pos.roomName === flag1.pos.roomName) {
//       creep.moveTo(flag2);
//     } else if (creep.pos.roomName === flag2.pos.roomName) {
//       creep.moveTo(flag3);
//     } else if (creep.pos.roomName === flag3.pos.roomName) {
//       creep.moveTo(flag4);
//     } else if (creep.pos.roomName === flag4.pos.roomName) {
//       creep.moveTo(flag5);
//     } else if (creep.pos.roomName === flag5.pos.roomName) {
//       creep.moveTo(flag7);
//       // } else if (creep.pos.roomName === flag6.pos.roomName) {
//       //   creep.moveTo(flag7);
//     } else if (creep.pos.roomName === flag7.pos.roomName) {
//       creep.moveTo(flag8);
//     } else if (creep.pos.roomName === flag8.pos.roomName) {
//       creep.moveTo(flag9);
//     } else if (creep.pos.roomName === flag9.pos.roomName) {
//       creep.moveTo(flag10);
//     } else if (creep.pos.roomName === flag10.pos.roomName) {
//       creep.moveTo(flag11);
//     } else if (creep.pos.roomName === flag11.pos.roomName) {
//       if (closestHostile) {
//         let pounce = creep.attack(closestHostile);
//         if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(flag20);
//       }
//     } else {
//       creep.moveTo(flag1);
//     }
//   }
// };
//
// module.exports = Fighter3;
//
// const lion = {
//   run: creep => {
//     let flag = Game.flags.attackFlag3;
//     if (flag) {
//       if (creep.pos.roomName === flag.pos.roomName) {
//         // creep.moveTo(flag);
//         // find targets in order of priority
//         // towers
//         let tower = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//           filter: structure => structure.structureType === STRUCTURE_TOWER
//         });
//         // extensions
//         let extension = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//           filter: structure => structure.structureType === STRUCTURE_EXTENSION
//         });
//         // spawn
//         let spawn = creep.room.find(FIND_HOSTILE_SPAWNS)[0];
//         // hostile creep
//         let closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
//         // let controller = creep.room.controller;
//         let enemyStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//           filter: structure => structure.structureType !== STRUCTURE_WALL
//         });
//         // let road = creep.pos.findCLosestByRange(FIND_STRUCTUERS, {
//         //   filter: structure => structure.structureType === STRUCTURE_ROAD
//         // });
//         let wall = creep.pos.findClosestByRange(FIND_STRUCTURES, {
//           filter: structure => structure.structureType === STRUCTURE_WALL
//         });
//
//         // attack towers
//         if (tower) {
//           console.log('Lions attacking enemy ', tower);
//           let pounce = creep.attack(tower);
//           if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(tower);
//           // then attack spawns
//         } else if (spawn) {
//           console.log('Lions attacking enemy ', spawn);
//           let pounce = creep.attack(spawn);
//           if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(spawn);
//           // then attack extensions
//         } else if (extension) {
//           console.log('Lions attacking enemy ', extension);
//           let pounce = creep.attack(extension);
//           if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(extension);
//         } else if (closestHostile) {
//           console.log('Lions attacking enemy ', closestHostile);
//           let pounce = creep.attack(closestHostile);
//           if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(closestHostile);
//         } else if (enemyStructure) {
//           console.log('Lions attacking enemey ', enemyStructure);
//           let pounce = creep.attack(enemyStructure);
//           if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(enemyStructure);
//         } else if (wall) {
//           console.log('Lions attacking enemy ', wall);
//           let pounce = creep.attack(wall);
//           if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(wall);
//         }
//       } else {
//         creep.moveTo(flag);
//       }
//     }
//   }
// };
//
// module.exports = lion;

const Fighter3 = {
  run: creep => {
    let flag = Game.flags.attackFlag3;
    if (flag) {
      if (creep.pos.roomName === flag.pos.roomName) {
        // creep.moveTo(flag);

        let hostileById;
        // shostileById = Game.getObjectById('5b7360dd7f6c003fc2944d3b');

        let closestHostile;
        closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

        // creep.say('lawl ðŸ˜˜');

        let hostileStructure;
        hostileStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
          filter: structure =>
            !structure.structureType === STRUCTURE_ROAD ||
            structure.structureType === STRUCTURE_CONTAINER ||
            !structure.structureType === STRUCTURE_WALL
        });
        let hostileSpawn;
        hostileSpawn = creep.room.find(FIND_HOSTILE_SPAWNS)[0];

        if (hostileById) {
          let pounce = creep.attack(hostileById);
          if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileById);
        } else if (closestHostile) {
          let pounce = creep.attack(closestHostile);
          if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(closestHostile);
        } else if (hostileSpawn) {
          let pounce = creep.attack(hostileSpawn);
          if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileSpawn);
        } else if (hostileStructure) {
          let pounce = creep.attack(hostileStructure);
          if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileStructure);
        }
      } else {
        creep.moveTo(flag);
      }
    }
  }
};

module.exports = Fighter3;

// // const Fighter = {
// //   run: creep => {
// //     let flag = Game.flags.attackFlag3;
// //     if (flag) {
// //       if (creep.pos.roomName === flag.pos.roomName) {
// //         creep.moveTo(flag);
// //
// //         let hostileById;
// //         // hostileById = Game.getObjectById('5b6de3cd66e2a17bd4a622fe');
// //
// //         let closestHostile;
// //         closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
// //
// //         if (hostileById) {
// //           let pounce = creep.attack(hostileById);
// //           if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileById);
// //         } else if (closestHostile) {
// //           let pounce = creep.attack(closestHostile);
// //           if (pounce === ERR_NOT_IN_RANGE) creep.heal(creep);
// //           creep.moveTo(flag);
// //           creep.moveTo(closestHostile);
// //           creep.heal(creep);
// //           // } else if (hostileSpawn) {
// //           // else if (hostileSpawn) {
// //           //   let pounce = creep.attack(hostileSpawn);
// //           //   if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileSpawn);
// //           // } else if (hostileStructure) {
// //           //   let pounce = creep.attack(hostileStructure);
// //           //   if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileStructure);
// //         } else if (creep.hits < creep.hitsMax) {
// //           creep.heal(creep);
// //           console.log('healing');
// //         }
// //       } else {
// //         creep.moveTo(flag);
// //         //   // creep.say('HUNGRY');
// //       }
// //     }
// //   }
// // };
// //
// // module.exports = Fighter;
