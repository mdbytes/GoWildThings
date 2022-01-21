import React from "react";

const getStars = (obj) => {
  const numStars = obj.stars;

  switch (numStars) {
    case 5:
      return (
        <React.Fragment>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </React.Fragment>
      );
    case 4:
      return (
        <React.Fragment>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
        </React.Fragment>
      );
    case 3:
      return (
        <React.Fragment>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </React.Fragment>
      );
  }
};

export default getStars;
