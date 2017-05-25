const myModule = require('./');
const {
  nimGame,
} = myModule;

describe('nimGame', () => {
  it('should return false for 4', () => {
    const number = 4;

    expect(nimGame(number)).toEqual(false);
  });

  it('should return true for 5', () => {
    const number = 5;

    expect(nimGame(number)).toEqual(true);
  });
});
