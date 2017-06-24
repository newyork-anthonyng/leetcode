const myModule = require('./');
const {
  maxCount,
  maxCountForEach,
} = myModule;

describe('maxCount', () => {
  it('should handle m=3, n=3, operations=[[2,2],[3,3]]', () => {
    const m = 3;
    const n = 3;
    const operations = [
      [2, 2],
      [3, 3],
    ];

    expect(maxCount(m, n, operations)).toEqual(4);
  });

  it('should handle m=4, n=4, operations=[[1,1],[2,2],[3,3]]', () => {
    const m = 4;
    const n = 4;
    const operations = [
      [1, 1],
      [2, 2],
      [3, 3],
    ];

    expect(maxCount(m, n, operations)).toEqual(1);
  });

  it('should handle m=3, n=3, operations=[]', () => {
    const m = 3;
    const n = 3;
    const operations = [];

    expect(maxCount(m, n, operations)).toEqual(9);
  });
});

describe('maxCountForEach', () => {
  it('should handle m=3, n=3, operations=[[2,2],[3,3]]', () => {
    const m = 3;
    const n = 3;
    const operations = [
      [2, 2],
      [3, 3],
    ];

    expect(maxCountForEach(m, n, operations)).toEqual(4);
  });

  it('should handle m=4, n=4, operations=[[1,1],[2,2],[3,3]]', () => {
    const m = 4;
    const n = 4;
    const operations = [
      [1, 1],
      [2, 2],
      [3, 3],
    ];

    expect(maxCountForEach(m, n, operations)).toEqual(1);
  });

  it('should handle m=3, n=3, operations=[]', () => {
    const m = 3;
    const n = 3;
    const operations = [];

    expect(maxCountForEach(m, n, operations)).toEqual(9);
  });
});
