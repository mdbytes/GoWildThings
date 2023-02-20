console.log("javascript ready");

const lightbox = GLightbox({
  href: "https://youtu.be/hHN0_IHgtCA",
  type: "video",
  source: "youtube", //vimeo, youtube or local
  width: 900,
  autoPlayVideos: "true",
});

const navToggleLink = document.querySelector("#navToggler");
const homeLink = document.querySelector("#homeLink");
const servicesLink = document.querySelector("#servicesLink");
const testimonialsLink = document.querySelector("#testimonialsLink");
const faqLink = document.querySelector("#faqLink");
const portfolioLink = document.querySelector("#portfolioLink");
const contactLink = document.querySelector("#contactLink");

const navToggler = document.querySelector("#navToggler");

const buttonClick = () => {
  contactLink.click();
  setTimeout(function () {
    navToggleLink.click();
  }, 500);
};

homeLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

servicesLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

testimonialsLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

faqLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

portfolioLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

contactLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});
