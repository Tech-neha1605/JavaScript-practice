function paginate(arr, page, pageSize) {
  if (!Array.isArray(arr) || pageSize <= 0 || page <= 0) return [];
  const start = (page - 1) * pageSize;
  if (start >= arr.length) return [];
  const out = [];
  for (let i = start; i < start + pageSize && i < arr.length; i++) out.push(arr[i]);
  return out;
}

// Sample
console.log(paginate([1,2,3,4,5,6], 2, 2)); // [3,4]
module.exports = { paginate };