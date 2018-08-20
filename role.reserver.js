var roleReserver = {
  run: function(creep) {
    const path = creep.pos.findPathTo(Game.flags.Flag7);
    if (path.length > 0) {
      creep.move(path[0].direction);
    } else {
      //   if (creep.room.controller) {
      //     if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
      //       creep.moveTo(creep.room.controller);

      //   }
      let controller = creep.room.controller;
      if (controller) {
        creep.signController(controller, 'const u = n00b; if (u) {🏳️ || ☠️}');
      }

      if (creep.room.controller) {
        if (
          creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(creep.room.controller);
        }
      }
    }
  }
};
module.exports = roleReserver;
