let ReplaceCreeps3rdBase = {
  // SLAVEHARVESTER3rdBASE
  SlaveHarvester3rdBase: name => {
    let slaveHarvester3rdBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'slaveHarvester3rdBase')
        slaveHarvester3rdBases.push(creep);
    }
    if (slaveHarvester3rdBases.length < 2) {
      Game.spawns['Spawn3'].spawnCreep(
        [WORK, WORK, CARRY, MOVE, MOVE, MOVE],
        name,
        {
          memory: { role: 'slaveHarvester3rdBase' }
        }
      );
      console.log('Spawning slaveHarvester3rdBase creep: ', name);
    }
  }
};
module.exports = ReplaceCreeps3rdBase;
