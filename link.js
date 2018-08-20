const link = {
  run: () => {
    const linkFrom = Game.getObjectById('5b6987177f6c003fc2903b3b');
    const linkTo = Game.getObjectById('5b6854d979a8fd3d48ed89da');

    linkFrom.transferEnergy(linkTo);
  }
};

module.exports = link;
