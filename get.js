fetch("https://learn.codeit.kr/api/members")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
