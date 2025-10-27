function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  const out = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // avoid duplicates in result
        let found = false;
        for (let k = 0; k < out.length; k++) if (out[k] === arr1[i]) { found = true; break; }
        if (!found) out.push(arr1[i]);
      }
    }
  }
  return out;
}

// Sample
console.log(intersection([1,2,3,4], [2,4,6,8])); // [2,4]
module.exports = { intersection };