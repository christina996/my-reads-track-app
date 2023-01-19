/**
 * convert array of objects into object of objects depend on the passed key
 * @param {Array} array the array of objects needed to be converted to the object of objects.
 * @param {String} key  property in the object to be the key of object
 * @returns {Object} object of objects
 */
export const convertArrayToObject = (array, key) => {
  return array.reduce(
    (prev, curr) => ({
      ...prev,
      [curr[key]]: curr,
    }),
    {}
  );
};
