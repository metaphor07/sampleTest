// let getBtn = document.getElementById("btn");
// let btnsec = document.querySelector(".read");
// getBtn.addEventListener("click", doThis);
// btnsec.addEventListener("click", readFunccf);
// function doThis() {
//   alert("Button Clicked!");
// }

// function readFunccf() {
//   alert("click successful");
// }

let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("submitBtn");

btn.addEventListener("click", getValues);

function getValues(e) {
  e.preventDefault();

  //   console.log(email.value);
  //   console.log(password.value);

  localStorage.setItem(
    "loginDetails",
    JSON.stringify({ ["email"]: email.value, ["password"]: password.value })
  );

  // email: safjsd@gmail.com
  // password : 1234
  JSON.parse(localStorage.getItem(""));
}

// json format
let user = {
  name: "atif",
  rollNO: 23432,
};

console.log(user.rollNO);
