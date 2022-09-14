console.log("start!");

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    return users[0];
  })
  .then((user) => {
    console.log(user);
    const { address } = user;
    return address;
  })
  .then((address) => {
    console.log(address);
    const { geo } = address;
    return geo;
  })
  .then((geo) => {
    console.log(geo);
    const { lat } = geo;
    return lat;
  })
  .then((lat) => {
    console.log(lat);
  });
console.log(`end?`);
