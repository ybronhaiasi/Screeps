const Fighter = {
  run: creep => {
    let flag = Game.flags.attackFlag4;
    if (flag) {
      if (creep.pos.roomName === flag.pos.roomName) {
        creep.moveTo(flag);

        let hostileById;
        // hostileById = Game.getObjectById('5b6de3cd66e2a17bd4a622fe');

        let closestHostile;
        closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

        if (hostileById) {
          let pounce = creep.attack(hostileById);
          if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileById);
        } else if (closestHostile) {
          let pounce = creep.attack(closestHostile);
          if (pounce === ERR_NOT_IN_RANGE) creep.heal(creep);
          creep.moveTo(flag);
          creep.moveTo(closestHostile);
          creep.heal(creep);
        }
        // else if (hostileSpawn) {
        //   let pounce = creep.attack(hostileSpawn);
        //   if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileSpawn);
        // } else if (hostileStructure) {
        //   let pounce = creep.attack(hostileStructure);
        //   if (pounce === ERR_NOT_IN_RANGE) creep.moveTo(hostileStructure);
        // }
        else if (creep.hits < creep.hitsMax) {
          creep.heal(creep);
          console.log('healing');
        }
      } else {
        creep.moveTo(flag);
        //   // creep.say('HUNGRY');
      }
    }
  }
};

module.exports = Fighter;
