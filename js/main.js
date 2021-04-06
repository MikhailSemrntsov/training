var menuButton = document.querySelector("#menuToggle");
menuButton.onclick = function () {
  console.log("работает");
  document.querySelector(".navbar").classList.toggle("navbar__visible");
  document.querySelector("body").classList.toggle("body__visible");
};
