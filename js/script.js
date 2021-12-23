var nav = document.querySelector("nav"),
  banners = document.getElementById("banner"),
  toggle = document.getElementById("toggle");

const scroll = () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
};

const switchBanner = () => {
  const isChecked = toggle.checked;
  if (isChecked) {
    banners.classList.add("dark");
    banners.classList.remove("banner-image");
  } else {
    banners.classList.remove("dark");
    banners.classList.add("banner-image");
  }
};

addEventListener("change", switchBanner, false);
addEventListener("scroll", scroll, false);
