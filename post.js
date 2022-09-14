const newMember = {
  name: "sashimi",
  email: "hello. eunewoo",
  department: "master",
};

fetch("https://learn.codeit.kr/api/members", {
  method: "POST",
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
