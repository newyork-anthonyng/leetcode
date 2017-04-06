const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return null;
};

module.exports = {
  linearSearch,
};
