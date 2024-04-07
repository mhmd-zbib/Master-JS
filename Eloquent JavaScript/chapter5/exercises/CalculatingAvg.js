const users = [
  { name: "Alice", age: 25, subscriptionStatus: "active" },
  { name: "Bob", age: 35, subscriptionStatus: "inactive" },
  { name: "Carol", age: 28, subscriptionStatus: "active" },
  { name: "Dave", age: 22, subscriptionStatus: "active" },
  { name: "Ellen", age: 45, subscriptionStatus: "inactive" },
  { name: "Frank", age: 29, subscriptionStatus: "inactive" },
];

function reduce(array, func, start) {
  let current = start;
  for (let element of array) {
    current = func(current, element);
  }
  return current;
}

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

function average(array) {
  const total = reduce(array, (a, b) => a + b, 0);
  const count = array.length;
  return total / count;
}

console.log(average(map(users, (s) => s.age)));
