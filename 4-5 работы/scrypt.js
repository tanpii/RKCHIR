document.addEventListener("DOMContentLoaded", function () {
  const showLoginFormButton = document.getElementById("showLoginFormButton");
  const showLoginFormButtonMobile = document.getElementById("showLoginFormButtonMobile");
  const popupLoginForm = document.getElementById("loginForm");
  const closeLoginFormButton = document.getElementById("closeLoginFormButton");

  showLoginFormButton.addEventListener("click", function () {
      popupLoginForm.style.display = "flex";
  });
  showLoginFormButtonMobile.addEventListener("click", function () {
    popupLoginForm.style.display = "flex";
  });

  closeLoginFormButton.addEventListener("click", function () {
      popupLoginForm.style.display = "none";
  });

  const burgerButton = document.querySelector(".header_burger");
  const mobileMenu = document.querySelector(".mobile_menu");

  burgerButton.addEventListener("click", function() {
      mobileMenu.classList.toggle("active");
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.style.display = "block";
        burgerButton.style.transform = "rotate(90deg)";
      } else {
        mobileMenu.style.display = "none";
        burgerButton.style.transform = "rotate(0deg)";
      }
  });
});