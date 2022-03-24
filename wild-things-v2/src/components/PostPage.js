import PortfolioItems from "./post/PortfolioItems";
import React from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

const PostPage = () => {
  const location = useLocation();
  console.log("location", location);
  let postId;
  let post;
  let posts;

  if (location.aboutProps) {
    posts = location.aboutProps.posts;
    post = posts.filter(
      (post) => post.id === Number.parseInt(location.aboutProps.postId)
    )[0];
    window.localStorage.setItem(
      "posts",
      JSON.stringify(location.aboutProps.posts)
    );
    window.localStorage.setItem(
      "postId",
      JSON.stringify(location.aboutProps.postId)
    );
  } else if (window.localStorage.getItem("posts")) {
    posts = JSON.parse(window.localStorage.getItem("posts"));
    postId = JSON.parse(window.localStorage.getItem("postId"));
    post = posts.filter((post) => post.id === Number.parseInt(postId))[0];
  } else {
    window.location.href = "/posts";
  }

  const postIdString = "post-" + post.id;
  const content = post.content.rendered;
  const galleryBeginningIndex = content.indexOf(
    '<figure class="wp-block-image '
  );
  const mainContent = content
    .slice(0, galleryBeginningIndex)
    .replace("[", "")
    .replace("]", "");
  const galleryContent = content.slice(galleryBeginningIndex);
  let beginningIndex = 0;
  let startsWithUrl = "";
  let url = "";
  let remainingGallery = galleryContent;
  let portfolioDetails = {};
  let images = [];
  let elements = [];

  let portfolioImage = {};
  let portfolioElement = {};
  let morePhotos = true;
  let slideLocation = 0;

  while (morePhotos) {
    if (remainingGallery.indexOf("src=") === -1) {
      morePhotos = false;
      continue;
    }
    beginningIndex = remainingGallery.indexOf("src=") + 5;
    startsWithUrl = remainingGallery.slice(beginningIndex);
    url = startsWithUrl.slice(0, startsWithUrl.indexOf('"'));
    remainingGallery = startsWithUrl.slice(startsWithUrl.indexOf('"'));
    portfolioImage = {
      image: url,
      slideLocation: slideLocation,
    };

    portfolioElement = {
      href: url,
      type: "image",
    };

    images.push(portfolioImage);
    elements.push(portfolioElement);
    slideLocation += 1;
  }

  portfolioDetails.images = images;
  portfolioDetails.elements = elements;

  console.log(portfolioDetails);

  //document.querySelector("#homeLink").classList.remove("active");

  return (
    <section id="post" className="post">
      <div className="container">
        <div className="row text-center mt-5">
          <h1 className="display-3 fw-bold text-capitalize">
            {post.title.rendered}
          </h1>
          <div className="heading-line"></div>
        </div>
      </div>

      <div className="container post-text" id={postIdString}>
        {parse(mainContent)}
      </div>

      <div className="container portfoio">
        <p className="mobilePresent">
          Tap on any image to display in full screen gallery.
        </p>
        <p className="largePresent">
          Hover over any image to display in full screen gallery.
        </p>
        <PortfolioItems portfolioDetails={portfolioDetails} />
      </div>
    </section>
  );
};

export default PostPage;
