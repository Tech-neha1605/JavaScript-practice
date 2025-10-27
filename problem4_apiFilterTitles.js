async function getTitlesByUser(userId) {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network response not ok');
    const posts = await res.json();
    const filtered = posts
      .filter(p => p.userId === userId)
      .map(p => p.title.toUpperCase());
    return filtered;
  } catch (e) {
    console.error('Fetch error:', e.message);
    return [];
  }
}

// Sample
(async () => {
  const titles = await getTitlesByUser(1);
  console.log(titles.slice(0, 3)); // show first 3 titles
})();
module.exports = { getTitlesByUser };