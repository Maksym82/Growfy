"use strict"

document.addEventListener('click', documentClick);


function documentClick(e) {
    const targetItem = e.target;
    console.log(targetItem);
    if(targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    } else if (targetItem.closest('.menu__link')) {
        document.documentElement.classList.toggle('menu-open');
    }
}


// Scroll up

const scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.addEventListener("click", () => {
  anime({
    targets: document.documentElement,
    scrollTop: 0,
    duration: 200,
    easing: "easeInOutQuad",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});