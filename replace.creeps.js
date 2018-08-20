let ReplaceCreeps = {
  // SLAVEHARVESTER
  replaceSlaveHarvester: name => {
    let slaveHarvesters = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'slaveHarvester')
        slaveHarvesters.push(creep);
    }
    if (slaveHarvesters.length < 1) {
      Game.spawns['Spawn1'].spawnCreep(
        [WORK, WORK, WORK, WORK, WORK, WORK, MOVE],
        name,
        {
          memory: { role: 'slaveHarvester' }
        }
      );
      console.log('Spawning slaveHarvester creep: ', name);
    }
  },

  replaceslaveHarvesterSatalite: name => {
    let slaveHarvesterSatalites = [];
    for (let creep in Game.creeps) {
      Game.spawns['Spawn1'].spawnCreep(
        [WORK, WORK, WORK, WORK, WORK, WORK, MOVE],
        name,
        {
          memory: { role: 'slaveHarvesterSatalite' }
        }
      );
      console.log('Spawning slaveHarvesterSatalite creep: ', name);
    }
  },

  replaceslaveHarvesterSatalite2: name => {
    let slaveHarvesterSatalite2s = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'slaveHarvesterSatalite2')
      //     slaveHarvesterSatalite2s.push(creep);
      // }
      // if (slaveHarvesterSatalite2s.length < 1) {
      Game.spawns['Spawn1'].spawnCreep(
        [WORK, WORK, WORK, WORK, WORK, WORK, MOVE],
        name,
        {
          memory: { role: 'slaveHarvesterSatalite2' }
        }
      );
      console.log('Spawning slaveHarvesterSatalite2 creep: ', name);
    }
  },

  // SLAVEHARVESTER2
  replaceSlaveHarvester2: name => {
    let slaveHarvesters2 = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'slaveHarvester2')
        slaveHarvesters2.push(creep);
    }
    if (slaveHarvesters2.length < 1) {
      Game.spawns['Spawn1'].spawnCreep(
        [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE],
        name,
        {
          memory: { role: 'slaveHarvester2' }
        }
      );
      console.log('Spawning slaveHarvester2 creep: ', name);
    }
  },

  // SLAVEUPGRADER
  replaceSlaveUpgrader: name => {
    let slaveUpgraders = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'slaveUpgrader')
        slaveUpgraders.push(creep);
    }
    if (slaveUpgraders.length < 2) {
      Game.spawns['Spawn1'].spawnCreep(
        [
          WORK,
          WORK,
          WORK,
          WORK,
          WORK,
          WORK,
          WORK,
          WORK,
          WORK,
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
          MOVE,
          MOVE
        ],
        name,
        {
          memory: { role: 'slaveUpgrader' }
        }
      );
      console.log('Spawning slaveUpgrader creep: ', name);
    }
  },
  //

  // SATALITE
  replacesatalite: name => {
    let satalites = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'satalite') satalites.push(creep);
      // }
      // if (satalites.length < 1) {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], name, {
        memory: { role: 'satalite' }
      });
      console.log('Spawning satalite creep: ', name);
    }
  },

  // SATALITE
  replacesatalite2: name => {
    let satalite2s = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'satalite2')
      //     satalite2s.push(creep);
      // }
      // if (satalite2s.length < 1) {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], name, {
        memory: { role: 'satalite2' }
      });
      console.log('Spawning satalite2 creep: ', name);
    }
  },
  //   // REPAIRER
  replaceRepairer: name => {
    let repairers = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'repairer') repairers.push(creep);
    }
    if (repairers.length < 2) {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], name, {
        memory: { role: 'repairer' }
      });
      console.log('Spawning repairer creep: ', name);
    }
  },

  // upgrader3rdBase
  replaceupgrader3rdBase: name => {
    let upgrader3rdBases = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'upgrader3rdBase')
      //     upgrader3rdBases.push(creep);
      // }
      // if (upgrader3rdBases.length < 3) {
      Game.spawns['Spawn3'].spawnCreep(
        [
          WORK,
          WORK,
          WORK,
          WORK,
          WORK,
          CARRY,
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
          memory: { role: 'upgrader3rdBase' }
        }
      );
      console.log('Spawning upgrader3rdBase creep: ', name);
    }
  },

  // BUILDER
  replaceBuilder: name => {
    let builders = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'builder') builders.push(creep);
    }
    if (builders.length < 0) {
      Game.spawns['Spawn1'].spawnCreep(
        [
          WORK,
          WORK,
          // WORK,
          // WORK,
          // WORK,
          // WORK,
          // CARRY,
          CARRY,
          CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          // CARRY,
          MOVE,
          MOVE,
          MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          MOVE
        ],
        name,
        {
          memory: { role: 'builder' }
        }
      );
      console.log('Spawning builder creep: ', name);
    }
  },

  // ,
  //
  //   // WATERBOY
  //   replaceWaterboy: name => {
  //     let waterboys = [];
  //     for (let creep in Game.creeps) {
  //       if (Game.creeps[creep].memory.role === 'waterboy') waterboys.push(creep);
  //     }
  //     if (waterboys.length < 2) {
  //       Game.spawns['h3nH0us3'].spawnCreep(
  //         [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
  //         name,
  //         { memory: { role: 'waterboy' } }
  //       );
  //       console.log('Spawning waterboy: ', name);
  //     }
  //   },

  // UPGRADER
  replaceUpgrader2ndBase: name => {
    let upgrader2ndBases = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'upgrader2ndBase')
        upgrader2ndBases.push(creep);
    }
    if (upgrader2ndBases.length < 0) {
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], name, {
        memory: { role: 'upgrader2ndBase' }
      });
      console.log('Spawning upgrader2ndBase creep: ', name);
    }
  },

  //
  // EXTENSIONER2
  replaceextensioner2: name => {
    let extensioners2 = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'extensioner2')
        extensioners2.push(creep);
    }
    if (extensioners2.length < 1) {
      Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, MOVE, MOVE, MOVE], name, {
        memory: { role: 'extensioner2' }
      });
      console.log('Spawning extensioner2: ', name);
    }
  },
  // EXTENSIONER4
  replaceextensioner4: name => {
    let extensioners4 = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'extensioner4')
        extensioners4.push(creep);
    }
    if (extensioners4.length < 1) {
      Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, MOVE], name, {
        memory: { role: 'extensioner4' }
      });
      console.log('Spawning extensioner4: ', name);
    }
  },

  // EXTENSIONER3
  replaceextensioner3: name => {
    let extensioners3 = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'extensioner3')
        extensioners3.push(creep);
    }
    if (extensioners3.length < 0) {
      Game.spawns['Spawn1'].spawnCreep([CARRY, MOVE], name, {
        memory: { role: 'extensioner3' }
      });
      console.log('Spawning extensioner3: ', name);
    }
  },
  //
  // fighter
  replacefighter: name => {
    let fighters = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'fighter') fighters.push(creep);
      // }
      // if (fighters.length < 6) {
      Game.spawns['Spawn1'].spawnCreep(
        [
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // ATTACK,
          // ATTACK,
          ATTACK,
          ATTACK,
          ATTACK,
          ATTACK,
          ATTACK,
          ATTACK,
          ATTACK,
          ATTACK,
          HEAL,
          HEAL
          // RANGED_ATTACK,
          //   RANGED_ATTACK,
          //   RANGED_ATTACK,
        ],
        name,
        {
          memory: { role: 'fighter' }
        }
      );
      console.log('Spawning fighter: ', name);
    }
  },
  //  fighter 3
  replacefighter3: name => {
    let fighter3s = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'fighter') fighters.push(creep);
      // }
      // if (fighters.length < 6) {
      Game.spawns['Spawn1'].spawnCreep(
        [
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          MOVE,
          MOVE,
          MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          ATTACK,
          ATTACK,
          ATTACK
          // ATTACK,
          // HEAL
          // RANGED_ATTACK,
          // RANGED_ATTACK,
          // RANGED_ATTACK
        ],
        name,
        { memory: { role: 'fighter3' } }
      );
      console.log('Spawning fighter3: ', name);
    }
  },

  //  fighter 4
  replacefighter4: name => {
    let fighter4s = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'fighter') fighters.push(creep);
      // }
      // if (fighters.length < 6) {
      Game.spawns['Spawn1'].spawnCreep(
        [
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
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
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          MOVE
          // ATTACK
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK
          // ATTACK,
          // HEAL,
          // HEAL
          // RANGED_ATTACK,
          //   RANGED_ATTACK,
          //   RANGED_ATTACK,
        ],
        name,
        { memory: { role: 'fighter4' } }
      );
      console.log('Spawning fighter4: ', name);
    }
  },
  // EXTENSIONER
  replaceextensioner: name => {
    let extensioners = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'extensioner')
        extensioners.push(creep);
    }
    if (extensioners.length < 3) {
      Game.spawns['Spawn1'].spawnCreep(
        [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
        name,
        {
          memory: { role: 'extensioner' }
        }
      );
      console.log('Spawning extensioner: ', name);
    }
  },

  // // EXTENSIONER2ndbase
  replaceextensioner5: name => {
    let extensioner5s = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'extensioner5')
        extensioner5s.push(creep);
    }
    if (extensioner5s.length < 1) {
      Game.spawns['Spawn1'].spawnCreep([CARRY, CARRY, MOVE], name, {
        memory: { role: 'extensioner5' }
      });
      console.log('Spawning extensioner5: ', name);
    }
  },

  //  fighter
  replacefighter2: name => {
    let fighter2s = [];
    for (let creep in Game.creeps) {
      //   if (Game.creeps[creep].memory.role === 'fighter') fighters.push(creep);
      // }
      // if (fighters.length < 6) {
      Game.spawns['Spawn1'].spawnCreep(
        [
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // TOUGH,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          // MOVE,
          MOVE,
          MOVE,
          MOVE,
          ATTACK,
          // ATTACK,
          ATTACK
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK,
          // ATTACK
          // HEAL,
          // HEAL
          // RANGED_ATTACK,
          // RANGED_ATTACK,
          // RANGED_ATTACK
        ],
        name,
        { memory: { role: 'fighter2' } }
      );
      console.log('Spawning fighter2: ', name);
    }
  },

  //   replacehealer: name => {
  //     let healers = [];
  //     for (let creep in Game.creeps) {
  //       if (Game.creeps[creep].memory.role === 'healer') healers.push(creep);
  //     }
  //     if (healers.length < 1) {
  //       Game.spawns['h3nH0us3'].spawnCreep(
  //         [MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL],
  //         name,
  //         { memory: { role: 'healer' } }
  //       );
  //       console.log('Spawning healer: ', name);
  //     }
  //   },
  //
  //   replacehealer2: name => {
  //     let healer2s = [];
  //     for (let creep in Game.creeps) {
  //       if (Game.creeps[creep].memory.role === 'healer2') healer2s.push(creep);
  //     }
  //     if (healer2s.length < 0) {
  //       Game.spawns['h3nH0us3'].spawnCreep(
  //         [MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL],
  //         name,
  //         { memory: { role: 'healer2' } }
  //       );
  //       console.log('Spawning healer2: ', name);
  //     }
  //   },
  //
  // MINER
  replaceMiner: name => {
    let miners = [];
    for (let creep in Game.creeps) {
      if (Game.creeps[creep].memory.role === 'miner') miners.push(creep);
    }
    if (miners.length < 1) {
      Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, MOVE], name, {
        memory: { role: 'miner' }
      });
      console.log('Spawning miner creep: ', name);
    }
  }
};

module.exports = ReplaceCreeps;
