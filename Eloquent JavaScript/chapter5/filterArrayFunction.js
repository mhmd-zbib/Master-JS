/**
 * filter array is a function that filters any array with the givin rule set to it
 *
 * @params {Array} array - The array to be filtered
 * @Params {Function} test - Pass the test rule for it, that inside the array will
 *                           get it to be true and work upon it
 *
 *
 * @return {Array} A new array that meats the conditions
 */

const users = [
  { name: "Alice", age: 25, subscriptionStatus: "active" },
  { name: "Bob", age: 35, subscriptionStatus: "inactive" },
  { name: "Carol", age: 28, subscriptionStatus: "active" },
  { name: "Dave", age: 22, subscriptionStatus: "active" },
  { name: "Ellen", age: 45, subscriptionStatus: "inactive" },
  { name: "Frank", age: 29, subscriptionStatus: "inactive" },
];

function filterArray(array, test) {
  let passed = []; //the element that passed the test

  for (let element of array) {
    //element think of it as the step on the array where it is the thing for it
    if (test(element)) {
      //if we are testing the element and it returned true then:

      passed.push(element);
    }
  }
  return element;
}

console.log(
  filterArray(
    users,
    (rule) => rule.age > 30 && rule.subscriptionStatus === "active"
  )
);
