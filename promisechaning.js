console.log(`start!`);

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const { id } = users[0];
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  })
  .then((response) => response.text())
  .then((posts) => {
    console.log(posts);
  });

console.log(`End`);
