let slaveHarvester2 = {
  run: function(creep) {
    if (creep.pos.x !== 42 || creep.pos.y !== 19) {
      creep.moveTo(42, 19);
    } else {
      if (creep.carry.energy < creep.carryCapacity) {
        var sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
          creep.say('Gathering');
          creep.moveTo(sources[1], {
            visualizePathStyle: { stroke: '#ffaa00' }
          });
        }
      } else {
        // let linkDepot2 = Game.rooms['W55N57'].lookForAt('structure', 43, 19)[0];
        let linkDepot2 = Game.getObjectById('5b62b03d2a22fc6800154a8a');

        if (creep.transfer(linkDepot2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          // creep.say('chkn dinner');
          creep.moveTo(linkDepot2, {
            visualizePathSTyle: { stroke: 'fafafa' }
          });
        }
      }
    }
  }
};

module.exports = slaveHarvester2;
