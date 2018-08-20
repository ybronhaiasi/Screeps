let slaveHarvester = {
  run: function(creep) {
    if (creep.pos.x !== 42 || creep.pos.y !== 41) {
    creep.moveTo(42, 41);
    } else {
     let sources = creep.room.find(FIND_SOURCES);
     creep.harvest(sources[1]);
    }
 }
};

module.exports = slaveHarvester;
