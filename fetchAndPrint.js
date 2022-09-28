async function fetchAndPrint() {
  try {
    const response = await fetch(`http://jsonplaceholder.typicode.commm/users`);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchAndPrint();
