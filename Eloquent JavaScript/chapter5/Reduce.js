/**
 *
 * @param {Array} array - Pass the array
 * @param {Function} func - The condition i wanna make for the array
 * @param {Integer} start - The first step to start with
 * @returns
 */

function reduce(array, func, start) {
  let current = start;
  for (let element of array) {
    current = func(current, element);
  }
  return current;
}

console.log(reduce([1, 24, 6, 78, 8], (a, b) => a + b, 0));
