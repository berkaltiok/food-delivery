const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
window.addEventListener('resize', appHeight);
appHeight();

// SVG
SVGInject(document.querySelectorAll("img.svg"));

// Open Popup
$(".header__order").on("click", function () {
  $("body")
    .addClass("popup")
    .children(".order")
    .addClass("active");
});
$(".order__shadow, .order__header-close").on("click", function () {
  $("body")
    .removeClass("popup")
    .children(".order")
    .removeClass("active");
});
