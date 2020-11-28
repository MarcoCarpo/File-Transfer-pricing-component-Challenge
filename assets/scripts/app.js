// Elements from DOM
const purpleSwitch = document.querySelector(".switch-container");
const options = document.querySelectorAll(".pricing-option-container");
const prices = document.querySelectorAll(".price");

// Annual values
let basic = 99.99;
let pro = 249.99;
let master = 399.99;

let priceBasic = options[0].children[0].children[1];
let pricePro = options[1].children[0].children[1];
let priceMaster = options[2].children[0].children[1];

priceBasic.childNodes[1].nodeValue = "199.99";
pricePro.childNodes[1].nodeValue = "249.99";
priceMaster.childNodes[1].nodeValue = "399.99";

// Event Listeners
purpleSwitch.addEventListener("click", (e) => {
  purpleSwitch.classList.toggle("switch-montly");

  addPriceAnim();
});

// Functions

function addPriceAnim() {
  prices.forEach((price) => {
    price.style.transition = "0.1s";
    price.style.transformOrigin = "0 50%";
    price.style.transform = "rotateX(90deg)";
    price.style.opacity = 0;
  });

  addEventListener("transitionend", switchMonAnn);
}

function switchMonAnn() {
  if (purpleSwitch.classList.contains("switch-montly")) {
    priceBasic.childNodes[1].nodeValue = "99.99";
    pricePro.childNodes[1].nodeValue = "24.99";
    priceMaster.childNodes[1].nodeValue = "39.99";
  } else {
    priceBasic.childNodes[1].nodeValue = "199.99";
    pricePro.childNodes[1].nodeValue = "249.99";
    priceMaster.childNodes[1].nodeValue = "399.99";
  }

  prices.forEach((price) => {
    price.style.transform = "translate(0,0)";
    price.style.opacity = 1;
  });
}
