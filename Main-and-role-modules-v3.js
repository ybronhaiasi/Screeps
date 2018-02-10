//MAIN
const clearMemory = require('clear-memory');
const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleRepairer = require('role.repairer');
const ReplaceCreeps = require('replace.creeps');

module.exports.loop = function () {
    
    clearMemory()
    
    ReplaceCreeps.replaceHarvester('Harvester' + Game.time)
    ReplaceCreeps.replaceUpgrader('Upgrader' + Game.time)
    ReplaceCreeps.replaceBuilder('Builder' + Game.time)
    ReplaceCreeps.repairer('Repairer' + Game.time)

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role === 'repairer') {
            roleRepairer.run(creep);
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//clear-memory

const clearMemory = () => {
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
}

module.exports = clearMemory

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Replace-creeps

let ReplaceCreeps = {
    
    replaceHarvester: (name) => {
        let harvesters = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'harvester') harvesters.push(creep)
        }
        if(harvesters.length < 3) {
            Game.spawns['h3nH0us3'].spawnCreep([WORK, CARRY, MOVE], name, {memory: {role: 'harvester'}})
            console.log('Spawning harvester creep: ', name)
        }
    },
    
    replaceUpgrader: (name) => {
        let upgraders = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'upgrader') upgraders.push(creep)
        }
        if(upgraders.length < 6) {
            Game.spawns['h3nH0us3'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], name, {memory: {role: 'upgrader'}})
            console.log('Spawning upgrader creep: ', name)
        }
    },

    replaceBuilder: (name) => {
        let builders = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'builder') builders.push(creep)
        }
        if(builders.length < 1) {
            Game.spawns['h3nH0us3'].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE], name, {memory: {role: 'builder'}})
            console.log('Spawning builder creep: ', name)
        }
    },
    
      harvester2: (name) => {
        let repairers = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'harvester2') repairers.push(creep)
        }
        if(repairers.length < 1) {
            Game.spawns['h3nH0us3'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], name, {memory: {role: 'harvester2'}})
        }
    },
   
    repairer: (name) => {
        let repairers = []
        for (let creep in Game.creeps) {
            if(Game.creeps[creep].memory.role === 'repairer') repairers.push(creep)
        }
        if(repairers.length < 1) {
            Game.spawns['h3nH0us3'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], name, {memory: {role: 'repairer'}})
        }
    }
}


module.exports = ReplaceCreeps

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//role.builder

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleBuilder;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//role.harvester

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
};

module.exports = roleHarvester;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//role.repairer

const roleRepairer = {
    
    run: (creep) => {
        
        if(creep.memory.repairing && creep.carry.energy === 0){
            creep.memory.repairing = false
            creep.say ('🔄 harvest!')
        }
        else if(!creep.memory.repairing && creep.carry.energy < creep.carryCapacity) {
            creep.memory.repairing = false
            creep.say('🔄 harvest!')
        }
        else if(!creep.memory.repairing && creep.carry.energy === creep.carryCapacity) {
            creep.memory.repairing = true
            creep.say('🚧 repairing!')
        }
        
        if(creep.memory.repairing) {
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: structure => structure.hits < structure.hitsMax
            })
            
            targets.sort((a,b) => a.hits - b.hits)
            
            if(targets.length){
                if(creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0])
                }
            }
        }
        
        if(!creep.memory.repairing) {
            if(creep.carry.energy < creep.carryCapacity) {
                let sources = creep.room.find(FIND_SOURCES)
                if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        }
    }
} 

module.exports = roleRepairer

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//role.upgrader

var roleUpgrader = {
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#FF7F50'}});
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleUpgrader;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
