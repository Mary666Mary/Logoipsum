document.getElementById("scroll-down").onclick = function () {
  document.getElementById("sub-index").scrollIntoView({ behavior: "smooth" });
};

const elem = document.querySelector(".boy");
document.addEventListener("scroll", () => {
  elem.style.backgroundPositionX = "0" + 0.5 * window.pageYOffset + "px";
});
