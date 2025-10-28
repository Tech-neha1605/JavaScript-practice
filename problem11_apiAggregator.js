async function userPostCounts() {
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const [uRes, pRes] = await Promise.all([fetch(usersUrl), fetch(postsUrl)]);
    if (!uRes.ok || !pRes.ok) throw new Error('Failed fetch');
    const users = await uRes.json();
    const posts = await pRes.json();
    const map = {};
    users.forEach(u => map[u.id] = 0);
    posts.forEach(p => { if (map.hasOwnProperty(p.userId)) map[p.userId]++; });
    return map;
  } catch (e) {
    console.error('Error:', e.message);
    return {};
  }
}

// Sample
(async()=> console.log(await userPostCounts()))();
module.exports = { userPostCounts };