// Game.market.deal('5b72abf3915a2e65801fa3f9', 7000, 'W56S57');

const link = require('link');
const link2 = require('link2');
const clearMemory = require('clear-memory');
const ReplaceCreeps = require('replace.creeps');
const towerControl = require('tower-control');
const towerControl2 = require('tower-control2');
const roleBuilder = require('role.builder');
const roleRepairer = require('role.repairer');
const slaveUpgrader = require('role.slaveUpgrader');
const slaveHarvester = require('role.slaveHarvester');
const slaveHarvester2 = require('role.slaveHarvester2');
const extensioner = require('role.extensioner');
const hauler = require('role.hauler');
const hauler2 = require('role.hauler2');
const rolefighter = require('role.fighter');
const scout = require('role.scout');
const upgrader3rdBase = require('role.upgrader3rdBase');
const satalite = require('role.satalite');
const satalite2 = require('role.satalite2');
const extensioner2 = require('role.extensioner2');
const extensioner3 = require('role.extensioner3');
const extensioner4 = require('role.extensioner4');
const roleMiner = require('role.miner');
const slaveHarvesterSatalite = require('role.slaveHarvesterSatalite');
const slaveHarvesterSatalite2 = require('role.slaveHarvesterSatalite2');
// // Modules for Second Base
const ReplaceCreeps2ndBase = require('replace.creeps2ndBase');
const slaveHarvester2ndBase = require('role.slaveHarvester2ndBase');
const extensioner2ndBase = require('role.extensioner2ndBase');
const repairer2ndBase = require('role.repairer2ndBase');
const reserver = require('role.reserver');
const reserver2 = require('role.reserver2');
const roleUpgrader2ndBase = require('role.upgrader2ndBase');
const slaveHarvesterTwo2ndBase = require('role.slaveHarvesterTwo2ndBase');
const fighter2 = require('role.fighter2');
const fighter3 = require('role.fighter3');
const fighter4 = require('role.fighter4');
const extensioner5 = require('role.extensioner5');
// // Modules for 3rd Base
const ReplaceCreeps3rdBase = require('replace.creeps3rdBase');
const repairer3rdBase = require('role.repairer3rdBase');
const roleBuilder3rdBase = require('role.builder3rdBase');
const slaveHarvester3rdBase = require('role.slaveHarvester3rdBase');

// const link = require('link');
link.run();
link2.run();

let slaveHarvesterSatalites = _.filter(
  Game.creeps,
  creep => creep.memory.role == 'slaveHarvesterSatalite'
);
console.log('slaveHarvesterSatalites: ' + slaveHarvesterSatalites.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let slaveHarvesterSatalite2s = _.filter(
  Game.creeps,
  creep => creep.memory.role == 'slaveHarvesterSatalite2'
);
console.log('slaveHarvesterSatalite2s: ' + slaveHarvesterSatalite2s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let extensioner5s = _.filter(
  Game.creeps,
  creep => creep.memory.role == 'extensioner5'
);
console.log('extensioner5s: ' + extensioner5s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let miners = _.filter(Game.creeps, creep => creep.memory.role == 'miner');
console.log('miners: ' + miners.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let fighter4s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'fighter4'
);
console.log('fighter4: ' + fighter4s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let fighter3s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'fighter3'
);
console.log('fighter3: ' + fighter3s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let fighter2s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'fighter2'
);
console.log('fighter2: ' + fighter2s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let satalite2s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'satalite2'
);
console.log('satalite2s: ' + satalite2s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let satalites = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'satalite'
);
console.log('satalites: ' + satalites.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let slaveHarvester3rdBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'slaveHarvester3rdBase'
);
console.log('slaveHarvester3rdBases: ' + slaveHarvester3rdBases.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let slaveHarvesterTwo2ndBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'slaveHarvesterTwo2ndBase'
);
console.log('slaveHarvesterTwo2ndBases: ' + slaveHarvesterTwo2ndBases.length);

/////////////////////////////////////////////////////////////////////////////////////////////
let upgrader2ndBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'upgrader2ndBase'
);
console.log('upgrader2ndBases: ' + upgrader2ndBases.length);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let slaveUpgraders = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'slaveUpgrader'
);
console.log('SlaveUpgraders: ' + slaveUpgraders.length);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let reserver2s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'reserver2'
);
console.log('reserver2s: ' + reserver2s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let reservers = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'reserver'
);
console.log('reservers: ' + reservers.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let extensioner2ndBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'extensioner2ndBase'
);
console.log('extensioner2ndBases: ' + extensioner2ndBases.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let extensioner2s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'extensioner2'
);
console.log('extensioner2s: ' + extensioner2s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let extensioner4s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'extensioner4'
);
console.log('extensioner4s: ' + extensioner4s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let extensioner3s = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'extensioner3'
);
console.log('extensioner3s: ' + extensioner3s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let upgrader3rdBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'upgrader3rdBase'
);
console.log('upgrader3rdBases: ' + upgrader3rdBases.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let slaveHarvesters = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'slaveHarvester'
);
console.log('SlaveHarvesters: ' + slaveHarvesters.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let slaveHarvester2ndBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'slaveHarvester2ndBase'
);
console.log('slaveHarvester2ndBases: ' + slaveHarvester2ndBases.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let slaveHarvesters2 = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'slaveHarvester2'
);
console.log('SlaveHarvesters2: ' + slaveHarvesters2.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let builders = _.filter(Game.creeps, creep => creep.memory.role === 'builder');
console.log('builders: ' + builders.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let repairers = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'repairer'
);
console.log('repairers: ' + repairers.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let extensioners = _.filter(
  Game.creeps,
  creep => creep.memory.role == 'extensioner'
);
console.log('extensioners: ' + extensioners.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let haulers = _.filter(Game.creeps, creep => creep.memory.role == 'hauler');
console.log('haulers: ' + haulers.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let hauler2s = _.filter(Game.creeps, creep => creep.memory.role == 'hauler2');
console.log('hauler2s: ' + hauler2s.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let scouts = _.filter(Game.creeps, creep => creep.memory.role === 'scout');
console.log('scouts: ' + scouts.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let fighter = _.filter(Game.creeps, creep => creep.memory.role === 'fighter');
console.log('fighter: ' + fighter.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let repairer2ndBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'repairer2ndBase'
);
console.log('repairer2ndBase: ' + repairer2ndBases.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let repairer3rdBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'repairer3rdBase'
);
console.log('repairer3rdBase: ' + repairer3rdBases.length);
/////////////////////////////////////////////////////////////////////////////////////////////
let builder3rdBases = _.filter(
  Game.creeps,
  creep => creep.memory.role === 'builder3rdBase'
);
console.log('builder3rdBases: ' + builder3rdBases.length);
/////////////////////////////////////////////////////////////////////////////////////////////

//   // Builds screeps
ReplaceCreeps2ndBase.replaceextensioner2ndBase(
  'extensioner2ndBase' + Game.time
);
ReplaceCreeps.replaceextensioner5('extensioner5' + Game.time);
ReplaceCreeps.replaceextensioner2('extensioner2' + Game.time);
ReplaceCreeps.replaceextensioner3('extensioner3' + Game.time);
ReplaceCreeps.replaceextensioner4('extensioner4' + Game.time);
ReplaceCreeps.replaceBuilder('Builder' + Game.time);
ReplaceCreeps.replaceMiner('Miner' + Game.time);
ReplaceCreeps2ndBase.replaceBuilder3rdBase('Builder3rdBase' + Game.time);
ReplaceCreeps2ndBase.replaceRepairer2ndBase('repairer2ndBase' + Game.time);
ReplaceCreeps2ndBase.replaceUpgrader2ndBase('upgrader2ndBase' + Game.time);
ReplaceCreeps2ndBase.replaceslaveHarvester2ndBase(
  'slaveHarvester2ndbase' + Game.time
);
ReplaceCreeps.replaceRepairer('Repairer' + Game.time);
ReplaceCreeps2ndBase.replaceSlaveHarvesterTwo2ndBase(
  'slaveHarvesterTwo2ndBase' + Game.time
);
ReplaceCreeps.replaceSlaveHarvester('SlaveHarvester' + Game.time);
ReplaceCreeps.replaceSlaveUpgrader('SlaveUpgrader' + Game.time);
ReplaceCreeps.replaceSlaveHarvester2('SlaveHarvester2' + Game.time);
ReplaceCreeps.replaceextensioner('extensioner' + Game.time);
ReplaceCreeps3rdBase.SlaveHarvester3rdBase('slaveHarvester3rdBase' + Game.time);

if (repairer3rdBases.length < 2) {
  ReplaceCreeps2ndBase.replaceRepairer3rdBase('repairer3rdBase' + Game.time);
}

if (scouts.length < 0) {
  ReplaceCreeps2ndBase.replacescout('scout' + Game.time);
}

if (satalites.length < 0) {
  ReplaceCreeps.replacesatalite('satalite' + Game.time);
}

if (satalite2s.length < 1) {
  ReplaceCreeps.replacesatalite2('satalite2' + Game.time);
}

if (reservers.length < 0) {
  ReplaceCreeps2ndBase.replacereservers('reserver' + Game.time);
}

if (reserver2s.length < 1) {
  ReplaceCreeps2ndBase.replacereserver2s('reserver2' + Game.time);
}

if (haulers.length < 2) {
  ReplaceCreeps2ndBase.replacehauler('haulers' + Game.time);
}

if (hauler2s.length < 2) {
  ReplaceCreeps2ndBase.replacehauler2('hauler2s' + Game.time);
}

if (fighter.length < 1) {
  ReplaceCreeps.replacefighter('fighter' + Game.time);
}

if (fighter2s.length < 0) {
  ReplaceCreeps.replacefighter2('fighter2' + Game.time);
}

if (fighter4s.length < 0) {
  ReplaceCreeps.replacefighter4('fighter4' + Game.time);
}
if (fighter3s.length < 0) {
  ReplaceCreeps.replacefighter3('fighter3' + Game.time);
}
if (upgrader3rdBases.length < 2) {
  ReplaceCreeps.replaceupgrader3rdBase('upgrader3rdBase' + Game.time);
}
if (slaveHarvesterSatalites.length < 0) {
  ReplaceCreeps.replaceslaveHarvesterSatalite(
    'slaveHarvesterSatalite' + Game.time
  );
}
if (slaveHarvesterSatalite2s.length < 0) {
  ReplaceCreeps.replaceslaveHarvesterSatalite2(
    'slaveHarvesterSatalite2' + Game.time
  );
}

//   // Runs creep AI
for (let name in Game.creeps) {
  let creep = Game.creeps[name];

  if (creep.memory.role == 'slaveHarvesterSatalite') {
    slaveHarvesterSatalite.run(creep);
  }
  if (creep.memory.role == 'slaveHarvesterSatalite2') {
    slaveHarvesterSatalite2.run(creep);
  }
  if (creep.memory.role == 'satalite2') {
    satalite2.run(creep);
  }
  if (creep.memory.role == 'satalite') {
    satalite.run(creep);
  }
  if (creep.memory.role == 'upgrader2ndBase') {
    roleUpgrader2ndBase.run(creep);
  }
  if (creep.memory.role == 'slaveHarvester3rdBase') {
    slaveHarvester3rdBase.run(creep);
  }
  if (creep.memory.role === 'slaveHarvesterTwo2ndBase') {
    slaveHarvesterTwo2ndBase.run(creep);
  }
  if (creep.memory.role === 'extensioner2ndBase') {
    extensioner2ndBase.run(creep);
  }
  if (creep.memory.role === 'extensioner5') {
    extensioner5.run(creep);
  }
  if (creep.memory.role === 'miner') {
    roleMiner.run(creep);
  }
  if (creep.memory.role === 'extensioner2') {
    extensioner2.run(creep);
  }
  if (creep.memory.role === 'extensioner4') {
    extensioner4.run(creep);
  }
  if (creep.memory.role === 'extensioner3') {
    extensioner3.run(creep);
  }
  if (creep.memory.role === 'upgrader3rdBase') {
    upgrader3rdBase.run(creep);
  }
  if (creep.memory.role === 'repairer2ndBase') {
    repairer2ndBase.run(creep);
  }
  if (creep.memory.role === 'repairer3rdBase') {
    repairer3rdBase.run(creep);
  }
  if (creep.memory.role === 'scout') {
    scout.run(creep);
  }
  if (creep.memory.role === 'reserver') {
    reserver.run(creep);
  }
  if (creep.memory.role === 'reserver2') {
    reserver2.run(creep);
  }
  if (creep.memory.role === 'slaveHarvester2ndBase') {
    slaveHarvester2ndBase.run(creep);
  }
  if (creep.memory.role === 'slaveHarvester') {
    slaveHarvester.run(creep);
  }
  if (creep.memory.role === 'slaveHarvester2') {
    slaveHarvester2.run(creep);
  }
  if (creep.memory.role === 'slaveUpgrader') {
    slaveUpgrader.run(creep);
  }
  if (creep.memory.role == 'builder') {
    roleBuilder.run(creep);
  }

  if (creep.memory.role == 'builder3rdBase') {
    roleBuilder3rdBase.run(creep);
  }

  if (creep.memory.role === 'repairer') {
    roleRepairer.run(creep);
  }
  if (creep.memory.role === 'extensioner') {
    extensioner.run(creep);
  }
  if (creep.memory.role === 'hauler') {
    hauler.run(creep);
  }
  if (creep.memory.role === 'hauler2') {
    hauler2.run(creep);
  }
  if (creep.memory.role === 'fighter') {
    rolefighter.run(creep);
  }
  if (creep.memory.role === 'fighter2') {
    fighter2.run(creep);
  }
  if (creep.memory.role === 'fighter4') {
    fighter4.run(creep);
  }
  if (creep.memory.role === 'fighter3') {
    fighter3.run(creep);
  }
}

//   // Runs tower AI
const towers = Game.rooms.W56S57.find(FIND_STRUCTURES, {
  filter: { structureType: STRUCTURE_TOWER }
});
const towers2 = Game.rooms.W58S56.find(FIND_STRUCTURES, {
  filter: { structureType: STRUCTURE_TOWER }
});
const towers3 = Game.rooms.W59S56.find(FIND_STRUCTURES, {
  filter: { structureType: STRUCTURE_TOWER }
});
towers.forEach(tower => {
  towerControl.run(tower);
});
towers2.forEach(tower => {
  towerControl2.run(tower);
});
towers3.forEach(tower => {
  towerControl2.run(tower);
});
