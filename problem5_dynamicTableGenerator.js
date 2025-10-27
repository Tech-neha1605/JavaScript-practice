function generateTable(data) {
  if (!Array.isArray(data)) return null;
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.margin = '10px';
  data.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      td.style.border = '1px solid black';
      td.style.padding = '5px 10px';
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  document.body.appendChild(table);
}