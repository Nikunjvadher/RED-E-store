let menuItems = document.getElementById("menu-items");

menuItems.style.maxHeight = "0%";

function menuToggle() {
  if (menuItems.style.maxHeight == "0%") {
    menuItems.style.maxHeight = "100%";
  } else {
    menuItems.style.maxHeight = "0%";
  }
}

// ============ js for product gallery ===============
let ProductImg = document.getElementById("ProductImg");
let smallImg = document.getElementsByClassName("SmallImg");

smallImg[0].onclick = function () {
  ProductImg.src = smallImg[0].src;
  // console.log("1")
};
smallImg[1].onclick = function () {
  ProductImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  ProductImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  ProductImg.src = smallImg[3].src;
};

// =============== js for toggle form ===========

// let loginform = document.getElementById("login-form");
// let registerForm = document.getElementById("Register-form");
// let Indicator = document.getElementById("indicator");

// function register() {
//   registerForm.style.transform = "translateX(0px)";
//   loginform.style.transform = "translateX(0px)";
//   Indicator.style.transform = "translateX(100px)";
//   console.log("register form");
// }
// function login() {
//   registerForm.style.transform = "translateX(300px)";
//   loginform.style.transform = "translateX(300px)";
//   Indicator.style.transform = "translateX(0px)";
//   console.log("login form");
// }

// console.log("11");
