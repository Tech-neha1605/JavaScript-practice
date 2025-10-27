async function fetchWithRateLimit(urls, delayMs = 2000) {
  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const start = Date.now();
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(`Fetched ${url} at ${new Date().toISOString()}`);
      results.push(data);
    } catch (e) {
      console.error('Fetch error for', url, e.message);
      results.push(null);
    }
    if (i < urls.length -1) await new Promise(r => setTimeout(r, delayMs));
  }
  return results;
}

// Sample
(async()=> {
  const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
  ];
  const res = await fetchWithRateLimit(urls, 2000);
  console.log(res.map(r => r ? r.name : null));
})();
module.exports = { fetchWithRateLimit };