const myModule = require('./');
const {
  findRestaurant,
  alternateSolution,
} = myModule;

describe('findRestaurant', () => {
  it('should work for one restaurant in both lists', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];
    const expected = ['Shogun'];

    expect(findRestaurant(list1, list2)).toEqual(expected);
  });

  it('should work for 2 restaurants in both lists', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KFC', 'Shogun', 'Burger King'];
    const expected = ['Shogun'];

    expect(findRestaurant(list1, list2)).toEqual(expected);
  });
});

describe('alternateSolution', () => {
  it('should work for one restaurant in both lists', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];
    const expected = ['Shogun'];

    expect(alternateSolution(list1, list2)).toEqual(expected);
  });

  it('should work for 2 restaurants in both lists', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KFC', 'Shogun', 'Burger King'];
    const expected = ['Shogun'];

    expect(alternateSolution(list1, list2)).toEqual(expected);
  });
});
