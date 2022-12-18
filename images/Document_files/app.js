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
