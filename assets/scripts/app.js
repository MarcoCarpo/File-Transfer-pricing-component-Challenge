// Elements from DOM
const purpleSwitch = document.querySelector(".switch-container");
const options = document.querySelectorAll(".pricing-option-container");

// // values
// let basic = 99.99;
// let pro = 249.99;
// let master = 399.99;

options[0].children[0].children[1].childNodes[1].nodeValue = "199.99";
options[1].children[0].children[1].childNodes[1].nodeValue = "249.99";
options[2].children[0].children[1].childNodes[1].nodeValue = "399.99";

// Event Listeners
purpleSwitch.addEventListener("click", (e) => {
  purpleSwitch.classList.toggle("switch-montly");
  switchMonAnn();
});

// Functions

function switchMonAnn() {
  if (purpleSwitch.classList.contains("switch-montly")) {
    options[0].children[0].children[1].childNodes[1].nodeValue = "19.99";
    options[1].children[0].children[1].childNodes[1].nodeValue = " 24.99";
    options[2].children[0].children[1].childNodes[1].nodeValue = " 39.99";
  } else {
    options[0].children[0].children[1].childNodes[1].nodeValue = "199.99";
    options[1].children[0].children[1].childNodes[1].nodeValue = "249.99";
    options[2].children[0].children[1].childNodes[1].nodeValue = "399.99";
  }
}
