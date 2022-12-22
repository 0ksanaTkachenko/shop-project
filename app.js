// Add to cart counter

let productCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".cart-add");

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
  })
);

// Modal (more details)

let moreDetailsBtns = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

let close1 = document.querySelector(".btn-close");

close1.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Slider

$(".slider-block").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
});

// Likes

let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (e.target.classList.contains("like-clicked")) {
      item.classList.remove("like-clicked");
    } else {
      item.classList.add("like-clicked");
    }
  })
);

// Modal on scroll

let pageHeight = document.documentElement.scrollHeight;
let openModalHeight = pageHeight / 2;

window.addEventListener("scroll", openModalScroll);

function openModalScroll() {
  let scrollPos = window.scrollY;
  if (scrollPos > openModalHeight) {
    openModal();
    window.removeEventListener("scroll", openModalScroll);
  }
}

//  Product quantity counter

let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementBtns = document.querySelectorAll(".increment-btn");
let inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}
let counter0 = new Counter(incrementBtns[0], decrementBtns[0], inputFields[0]);
let counter1 = new Counter(incrementBtns[1], decrementBtns[1], inputFields[1]);
let counter2 = new Counter(incrementBtns[2], decrementBtns[2], inputFields[2]);
let counter3 = new Counter(incrementBtns[3], decrementBtns[3], inputFields[3]);
let counter4 = new Counter(incrementBtns[4], decrementBtns[4], inputFields[4]);
let counter5 = new Counter(incrementBtns[5], decrementBtns[5], inputFields[5]);
let counter6 = new Counter(incrementBtns[6], decrementBtns[6], inputFields[6]);
let counter7 = new Counter(incrementBtns[7], decrementBtns[7], inputFields[7]);
let counter8 = new Counter(incrementBtns[8], decrementBtns[8], inputFields[8]);

//  for (i = 0; i <= decrementBtns.length; i++) {
//    let decrementBtn = decrementBtns[i];
//    let incrementBtn = incrementBtns[i];
//    let inputField = inputFields[i];

//    let counter = new Counter(incrementBtn, decrementBtn, inputField);
//  }
