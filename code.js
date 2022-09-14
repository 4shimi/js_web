fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    console.log(users.length);
    users.forEach((user) => {
      console.log(user.name);
    });
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    const users = result;
  });
