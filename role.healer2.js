const healer = {
  run: creep => {
    let flag1 = Game.flags.wayPoint1;

    let flag2 = Game.flags.wayPoint2;

    let flag3 = Game.flags.wayPoint3;

    let flag4 = Game.flags.wayPoint4;

    let flag5 = Game.flags.attackFlag2;

    if (creep.pos.roomName === flag1.pos.roomName) {
      if (creep.pos.y === 49) {
        creep.move(TOP);
      } else {
        creep.moveTo(flag2);
      }
    } else if (creep.pos.roomName === flag2.pos.roomName) {
      creep.moveTo(flag3);
    } else if (creep.pos.roomName === flag3.pos.roomName) {
      creep.moveTo(flag4);
    } else if (creep.pos.roomName === flag4.pos.roomName) {
      creep.moveTo(flag5);
    } else if (creep.pos.roomName === flag5.pos.roomName) {
      let flag = Game.flags.healFlag;
      if (flag) {
        if (creep.pos.roomName !== flag.pos.roomName) {
          creep.moveTo(flag);
        }
      }
      var damagedCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
        filter: creep => creep.hits < creep.hitsMax
      });

      let myCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
        filter: creep => creep.memory.role === 'fighter'
      });
creep.moveTo(flag5);
      if (damagedCreep) {
        if (creep.heal(damagedCreep) === ERR_NOT_IN_RANGE) {
          creep.moveTo(damagedCreep);
        }
      } else if (myCreep) {
        if (creep.heal(myCreep) === ERR_NOT_IN_RANGE) {
          creep.moveTo(myCreep);
        }
      }
    } else {
      creep.moveTo(flag1);
    }
  }
};

module.exports = healer;
