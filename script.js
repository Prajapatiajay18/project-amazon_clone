const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const category = document.getElementById("category");
const cartCountElement = document.getElementById("cartCount");

let cartCount = 0;

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchValue = searchInput.value.trim();
  const selectedCategory = category.value;

  if (searchValue === "") {
    resultText.innerText = "Please product ka naam enter karo.";
    searchInput.focus();
    return;
  }
});

const productItems = document.querySelectorAll(".product-item");
const headphoneImages = document.querySelectorAll(".headphone-images img");

productItems.forEach(function (productItem) {
  productItem.addEventListener("click", function () {
    const productName = productItem.querySelector("p").innerText;

    cartCount++;

    cartCountElement.innerText = cartCount;

    resultText.innerText =
      `${productName} cart mein add ho gaya. Total items: ${cartCount}`;
  });
});

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchValue = searchInput.value.trim();
  const selectedCategory = category.value;

  if (searchValue === "") {
    searchInput.focus();
    return;
  }

  console.log("Search:", searchValue);
  console.log("Category:", selectedCategory);

  searchInput.value = "";
});


const slides = document.querySelectorAll(".slide");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

let currentSlideIndex = 0;
let sliderInterval;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlideIndex++;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  showSlide(currentSlideIndex);
}

function previousSlide() {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide(currentSlideIndex);
}

nextButton.addEventListener("click", function () {
  nextSlide();
  restartAutoSlider();
});

previousButton.addEventListener("click", function () {
  previousSlide();
  restartAutoSlider();
});

function startAutoSlider() {
  sliderInterval = setInterval(function () {
    nextSlide();
  }, 4000);
}

function restartAutoSlider() {
  clearInterval(sliderInterval);
  startAutoSlider();
}

startAutoSlider();



const allMenuButton = document.getElementById("allMenuButton");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenuButton = document.getElementById("closeMenuButton");

function openMenu() {
  sideMenu.classList.add("open");
  menuOverlay.classList.add("show");

  document.body.style.overflow = "hidden";
}

function closeMenu() {
  sideMenu.classList.remove("open");
  menuOverlay.classList.remove("show");

  document.body.style.overflow = "auto";
}

allMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});