const towerControl2ndBase = {
  run: tower => {
    let hostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    // let hostile = Game.getObjectById('5b58ed8002e1844733f6e67f')
    if (hostile) {
      tower.attack(hostile);
    } else {
      let damagedStructures = tower.room.find(FIND_STRUCTURES, {
        filter: structure => {
          return (
            (structure.structureType == STRUCTURE_CONTAINER ||
              structure.structureType == STRUCTURE_ROAD ||
              !structure.structureType == STRUCTURE_RAMPART ||
              !structure.structureType == STRUCTURE_WALL) &&
            structure.hits < structure.hitsMax
          );
        }
      });
      damagedStructures.sort((a, b) => a.hits - b.hits);

      if (damagedStructures) {
        tower.repair(damagedStructures[0]);
      }
    }
  }
};

module.exports = towerControl2ndBase;
