/**
 *  Transforming with map its a function that returns the array filtered for the
 *  title that i pass for it.
 *
 * @param {Array} array - Passing the array i wanna work on
 * @param {Function} transform - Passing the function that i want to create the new array upon
 *
 * @return {Array}  A new array with the condition met
 *
 * @usage map(ARRAY, (s) => s.name) - returns the name only
 *
 *
 */

const users = [
  { name: "Alice", age: 25, subscriptionStatus: "active" },
  { name: "Bob", age: 35, subscriptionStatus: "inactive" },
  { name: "Carol", age: 28, subscriptionStatus: "active" },
  { name: "Dave", age: 22, subscriptionStatus: "active" },
  { name: "Ellen", age: 45, subscriptionStatus: "inactive" },
  { name: "Frank", age: 29, subscriptionStatus: "inactive" },
];

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

console.log(map(users, (s) => s.name));
s;
