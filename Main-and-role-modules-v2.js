//Main
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    
    if(harvesters.length < 3) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['h3nH0us3'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }
    
            if(Game.spawns['h3nH0us3'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['h3nH0us3'].spawning.name];
            Game.spawns['h3nH0us3'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['h3nH0us3'].pos.x + 1, 
            Game.spawns['h3nH0us3'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
           if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
           if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
    }

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    if(upgraders.length < 2) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['h3nH0us3'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader'}});
    }
    
    if(Game.spawns['h3nH0us3'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['h3nH0us3'].spawning.name];
            Game.spawns['h3nH0us3'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['h3nH0us3'].pos.x + 1, 
            Game.spawns['h3nH0us3'].pos.y, 
            {align: 'left', opacity: 0.8});
        }
}
   
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    if(builders.length < 2) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new Builder: ' + newName);
        Game.spawns['h3nH0us3'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], newName, 
            {memory: {role: 'builder'}});
    }
     if(Game.spawns['h3nH0us3'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['h3nH0us3'].spawning.name];
        Game.spawns['h3nH0us3'].room.visual.text(
            'ðŸ› ï¸' + spawningCreep.memory.role,
            Game.spawns['h3nH0us3'].pos.x + 1, 
            Game.spawns['h3nH0us3'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    
    
	
	//////////////////////////////////////////////////////////////////////////////////////////////
	//bulder
	var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('building');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                targets.sort(function(a,b){return a.progress > b.progress ? -1 : 1});
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {reusePath: 10});
                }
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

module.exports = roleBuilder;
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////
	//harvester
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
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////
	//repairer
	var roleRepairer = 
{
/** @param {Creep} creep **/
run: function(creep) {

if(creep.memory.repairing && creep.carry.energy == 0) {
creep.memory.repairing = false;
creep.say('🔄 R: Hrv');
}
else if(!creep.memory.repairing && creep.carry.energy < creep.carryCapacity) {
creep.memory.repairing = false;
creep.say('🔄 R: Hrv');
}
else if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
creep.memory.repairing = true;
creep.say('🚧 repair');
}

if(creep.memory.repairing) 
{
const targets = creep.room.find(FIND_STRUCTURES);
targets.sort((a,b) => a.hits - b.hits);
if(targets.length) {
if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
creep.say('repair');
}
}
}
else 
{
var sources = creep.room.find(FIND_SOURCES);
if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
}
}
}
}

module.exports = roleRepairer;
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////
	//upgraderer
	var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
	   if(creep.memory.upgrader && creep.carry.energy == 0) {
        creep.memory.upgrader = false;
    }
    if(!creep.memory.upgrader && creep.carry.energy == creep.carryCapacity) {
        creep.memory.upgrader = true;
    }

    if(creep.memory.upgrader) {
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller,{visualizePathStyle: {stroke: '#ffaa00'}});
        }
        } else {
           var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
	}
};

module.exports = roleUpgrader;

	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////
