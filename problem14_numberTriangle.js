function numberTriangle(n) {
  if (n <= 0) return '';
  let s = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      s += j + (j === i ? '' : ' ');
    }
    if (i !== n) s += '\n';
  }
  return s;
}

// Sample
console.log(numberTriangle(4));
module.exports = { numberTriangle };