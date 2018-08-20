const link = {
  run: () => {
    const linkFrom = Game.getObjectById('5b6854d979a8fd3d48ed89da');
    const linkTo = Game.getObjectById('5b711754e4055e3fc3e2aa62');

    linkFrom.transferEnergy(linkTo);
  }
};

module.exports = link;
