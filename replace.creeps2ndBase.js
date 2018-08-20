let ReplaceCreeps2ndBase = {
  // UPGRADER
  replaceUpgrader2ndBase: name => {
    let upgrader2ndBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'upgrader2ndBase')
        upgrader2ndBases.push(creep);
    }
    if (upgrader2ndBases.length < 3) {
      Game.spawns['Spawn2'].spawnCreep(
        [
          WORK,
          WORK,
          WORK,
          WORK,
          WORK,
          CARRY,
          CARRY,
          CARRY,
          MOVE,
          MOVE,
          MOVE,
          MOVE
        ],
        name,
        {
          memory: { role: 'upgrader2ndBase' }
        }
      );
      console.log('Spawning upgrader2ndBase creep: ', name);
    }
  },
  //   // REPAIRER 2ND BASE
  replaceRepairer2ndBase: name => {
    let repairer2ndBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'repairer2ndBase')
        repairer2ndBases.push(creep);
    }
    if (repairer2ndBases.length < 2) {
      Game.spawns['Spawn2'].spawnCreep([WORK, CARRY, MOVE, MOVE], name, {
        memory: { role: 'repairer2ndBase' }
      });
      console.log('Spawning repairer2ndBase creep: ', name);
    }
  },

  //   // REPAIRER 3RD BASE
  replaceRepairer3rdBase: name => {
    let repairer3rdBases = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'repairer3rdBase')
      //     repairer3rdBases.push(creep);
      // }
      // if (repairer3rdBases.length < 2) {
      Game.spawns['Spawn3'].spawnCreep([WORK, CARRY, MOVE, MOVE], name, {
        memory: { role: 'repairer3rdBase' }
      });
      console.log('Spawning repairer3rdBase creep: ', name);
    }
  },

  // SLAVEHARVESTER2ndBASE
  replaceslaveHarvester2ndBase: name => {
    let slaveHarvester2ndBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'slaveHarvester2ndBase')
        slaveHarvester2ndBases.push(creep);
    }
    if (slaveHarvester2ndBases.length < 1) {
      Game.spawns['Spawn2'].spawnCreep(
        [WORK, WORK, WORK, WORK, WORK, WORK, MOVE],
        name,
        { memory: { role: 'slaveHarvester2ndBase' } }
      );
      console.log('Spawning slaveHarvester2ndBase creep: ', name);
    }
  },

  // scout
  replacescout: name => {
    let scouts = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'scout') scouts.push(creep);
      // }
      // if (scouts.length < 1) {
      Game.spawns['Spawn2'].spawnCreep([WORK, CARRY, MOVE, MOVE], name, {
        memory: { role: 'scout' }
      });
      console.log('Spawning scout creep: ', name);
    }
  },

  // reserver
  replacereservers: name => {
    let reservers = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'reserver') reservers.push(creep);
      // }
      // if (reservers.length < 0) {
      Game.spawns['Spawn1'].spawnCreep([CLAIM, CLAIM, MOVE, MOVE], name, {
        memory: { role: 'reserver' }
      });
      console.log('Spawning reserver creep: ', name);
    }
  },

  // reserver2
  replacereserver2s: name => {
    let reserver2s = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'reserver2') reserver2s.push(creep);
      // }
      // if (reserver2s.length < 0) {
      Game.spawns['Spawn1'].spawnCreep([CLAIM, CLAIM, MOVE, MOVE], name, {
        memory: { role: 'reserver2' }
      });
      console.log('Spawning reserver2 creep: ', name);
    }
  },

  // hauler
  replacehauler: name => {
    let haulers = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'hauler') haulers.push(creep);
      // }
      // if (haulers.length < 0) {
      Game.spawns['Spawn1'].spawnCreep(
        [
          WORK,
          WORK,
          WORK,
          CARRY,
          CARRY,
          CARRY,
          CARRY,
          CARRY,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE
        ],
        name,
        {
          memory: { role: 'hauler' }
        }
      );
      console.log('Spawning hauler creep: ', name);
    }
  },

  // hauler
  replacehauler2: name => {
    let hauler2s = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'hauler') haulers.push(creep);
      // }
      // if (haulers.length < 0) {
      Game.spawns['Spawn2'].spawnCreep(
        [
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE
          WORK,
          WORK,
          WORK,
          CARRY,
          CARRY,
          CARRY,
          CARRY,
          CARRY,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE
        ],
        name,
        {
          memory: { role: 'hauler2' }
        }
      );
      console.log('Spawning hauler2 creep: ', name);
    }
  },
  // BUILDER
  replaceBuilder3rdBase: name => {
    let builder3rdBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'builder3rdBase')
        builder3rdBases.push(creep);
    }
    if (builder3rdBases.length < 1) {
      Game.spawns['Spawn3'].spawnCreep(
        [
          // WORK,
          // WORK,
          // WORK,
          WORK,
          WORK,
          CARRY,
          CARRY,
          CARRY,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE
        ],
        name,
        {
          memory: { role: 'builder3rdBase' }
        }
      );
      console.log('Spawning builder3rdBase creep: ', name);
    }
  },

  // SLAVEHARVESTERTwo2ndBase
  replaceSlaveHarvesterTwo2ndBase: name => {
    let slaveHarvesterTwo2ndBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'slaveHarvesterTwo2ndBase')
        slaveHarvesterTwo2ndBases.push(creep);
    }
    if (slaveHarvesterTwo2ndBases.length < 1) {
      Game.spawns['Spawn2'].spawnCreep(
        [
          WORK,
          // WORK,
          WORK,
          WORK,
          WORK,
          WORK,
          MOVE
        ],
        name,
        {
          memory: { role: 'slaveHarvesterTwo2ndBase' }
        }
      );
      console.log('Spawning slaveHarvesterTwo2ndBase creep: ', name);
    }
  },

  // EXTENSIONER2ndbase
  replaceextensioner2ndBase: name => {
    let extensioner2ndBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'extensioner2ndBase')
        extensioner2ndBases.push(creep);
    }
    if (extensioner2ndBases.length < 2) {
      Game.spawns['Spawn2'].spawnCreep([CARRY, CARRY, MOVE], name, {
        memory: { role: 'extensioner2ndBase' }
      });
      console.log('Spawning extensioner2ndBase: ', name);
    }
  }
};

module.exports = ReplaceCreeps2ndBase;
