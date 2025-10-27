function pad(n){ return n < 10 ? '0' + n : '' + n; }
function formatDate(d){ return `${pad(d.getDate())}-${pad(d.getMonth()+1)}-${d.getFullYear()}`; }

function dateRange(startDate, endDate) {
  if (!(startDate instanceof Date) || !(endDate instanceof Date) || startDate > endDate) return 'Invalid';
  const out = [];
  let current = new Date(startDate.getTime());
  while (current <= endDate) {
    out.push(formatDate(current));
    current.setDate(current.getDate() + 1);
  }
  return out;
}

// Sample
console.log(dateRange(new Date("2025-10-01"), new Date("2025-10-03")));
// ["01-10-2025","02-10-2025","03-10-2025"]

module.exports = { dateRange };