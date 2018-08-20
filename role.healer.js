const healer = {
  run: creep => {
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

    if (damagedCreep) {
      if (creep.heal(damagedCreep) === ERR_NOT_IN_RANGE) {
        creep.moveTo(damagedCreep);
      }
    } else if (myCreep) {
      if (creep.heal(myCreep) === ERR_NOT_IN_RANGE) {
        creep.moveTo(myCreep);
      }
    }
  }
};

module.exports = healer;
