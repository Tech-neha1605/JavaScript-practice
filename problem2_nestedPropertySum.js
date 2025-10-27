// File: problem2_nestedPropertySum.js
// Run: node problem2_nestedPropertySum.js

function sumNestedProp(arr, prop) {
  if (!Array.isArray(arr)) return 0;
  let total = 0;
  for (let item of arr) {
    if (item && typeof item === 'object') {
      total += typeof item[prop] === 'number' ? item[prop] : 0;
      if (Array.isArray(item.children)) {
        total += sumNestedProp(item.children, prop);
      }
    }
  }
  return total;
}

// Sample test
const data = [
  { id: 1, value: 10 },
  { id: 2, value: 20, children: [{ value: 5 }] }
];

console.log(sumNestedProp(data, 'value')); // expected output: 35
