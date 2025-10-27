function chunkArray(arr, chunkSize) {
  if (!Array.isArray(arr) || chunkSize <= 0) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = [];
    for (let j = 0; j < chunkSize && i + j < arr.length; j++) {
      chunk.push(arr[i + j]);
    }
    result.push(chunk);
  }
  return result;
}

// Sample
console.log(chunkArray([1,2,3,4,5,6], 2)); // [[1,2],[3,4],[5,6]]

module.exports = { chunkArray };