const fetchUserData = () => {
  fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  })
    .then((res) => {
      res
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//fetchUserData();

const fetchUserData1 = async () => {
  var res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });
  var data = await res.json();
    console.log(data);
};
fetchUserData1();
