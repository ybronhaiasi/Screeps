let slaveHarvesterTwo2ndBase = {
  run: function(creep) {
    if (creep.pos.x !== 15 || creep.pos.y !== 45) {
      creep.moveTo(15, 45);
    } else {
      let sources = creep.room.find(FIND_SOURCES);
      creep.harvest(sources[1]);
    }
  }
};

module.exports = slaveHarvesterTwo2ndBase;
