/**
 * This script is under development for a new portfolio feature
 * The new feature will open a lightbox slider with portfolio images
 * and details including links to live sites and github
 */

let portfolioView = document.querySelector("#detailView");

portfolioView.addEventListener("click", () => {
  // Instead of using a selector, define the gallery elements
  const myGallery = GLightbox({
    startAt: "0",
    openEffect: "zoom",
    closeEffect: "fade",
    cssEffects: {
      fade: { in: "fadeIn", out: "fadeOut" },
      zoom: { in: "zoomIn", out: "zoomOut" },
    },
    width: "80%",
    elements: [
      {
        href: "images/portfolio/01.jpeg",
        type: "image",
        title: "<h2 style='text-align:center;'>Feedback Focus</h2>",
        description:
          "<p>The Feedback Focus web application is designed for businesses looking to stay in touch with their customers.</p><p> The app authenticates users and facilitates large-scale survey production, email survey transmission, and compilation of survey results. Users each have an individualized dashboard with reports summarizing survey results to date. </p><p>Feedback Focus was built with React, Node.js, Express, and MongoDB. User interface styling was enhanced by use of the Materialize CSS design library. As it is today, the application has been tested on a broad range of browser and mobile devices.  A demo of the site has been deployed to Heroku. Code can be reviewed at <a href='http://github.com'>Github</a>.</p>",
        width: 500,
      },
      {
        href: "https://picsum.photos/1200/800",
        type: "image",
        alt: "image text alternatives",
      },
      {
        href: "https://www.youtube.com/watch?v=Ga6RYejo6Hk",
        type: "video",
        source: "youtube", //vimeo, youtube or local
        width: 900,
      },
      {
        content: "<p>This will append some html inside the slide</p>", // read more in the API section
      },
      {
        content: document.getElementById("inline-example"), // this will append a node inside the slide
      },
    ],
    autoplayVideos: false,
  });
  myGallery.open();
});
