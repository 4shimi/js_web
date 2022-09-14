fetch("https://learn.codeit.kr/api/members/2", {
  method: "DELETE",
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
