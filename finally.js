fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`exit`);
  });
