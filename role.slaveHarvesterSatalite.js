let slaveHarvester = {
  run: function(creep) {
    if (creep.pos.x !== 17 || creep.pos.y !== 15) {
    creep.moveTo(17, 15);
    } else {
     let sources = creep.room.find(FIND_SOURCES);
     creep.harvest(sources[0]);
    }
 }
};

module.exports = slaveHarvester;
