function generateList(items) {
  const ul = document.createElement('ul');
  items.forEach((it, idx) => {
    const li = document.createElement('li');
    li.textContent = it;
    const up = document.createElement('button'); up.textContent = 'Up';
    const down = document.createElement('button'); down.textContent = 'Down';
    up.addEventListener('click', () => {
      if (idx === 0) return;
      const tmp = items[idx-1]; items[idx-1] = items[idx]; items[idx] = tmp;
      refresh();
    });
    down.addEventListener('click', () => {
      if (idx === items.length-1) return;
      const tmp = items[idx+1]; items[idx+1] = items[idx]; items[idx] = tmp;
      refresh();
    });
    li.appendChild(up); li.appendChild(down);
    ul.appendChild(li);
  });
  function refresh() { document.body.innerHTML=''; generateList(items); }
  document.body.appendChild(ul);
  return ul;
}
if (typeof module !== 'undefined') module.exports = { generateList };