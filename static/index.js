// Toggle for mobile navigation from primary navigation
const primaryNavigation = document.querySelector(".primary-navigation");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

primaryNavigation.dataset.visible = "false";

mobileNavToggle.addEventListener("click", function () {
  let isVisible = primaryNavigation.getAttribute("data-visible");
  
  if (isVisible === "false") {
    primaryNavigation.dataset.visible = "true";
    mobileNavToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNavigation.dataset.visible = "false";
    mobileNavToggle.setAttribute("aria-expanded", false);
  }
});
