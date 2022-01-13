import React from "react";
import { NavLink } from "react-router-dom";

const service = (serviceObj) => {
  return (
    <React.Fragment>
      <div className="col-lg-6 col-sm-12 col-xs-12 services-column">
        <div className="services__content">
          <div className="icon fas fa-paper-plane d-block"></div>
          <h3 className="display-3--title">{serviceObj.title}</h3>
          <p className="lh-lg">{serviceObj.description}</p>
          <div className="learn-btn">
            <NavLink
              to="/contact"
              type="button"
              className="rounded-pill btn-rounded border-primary"
            >
              Learn More
              <span>
                <i className="bi bi-envelope-fill"></i>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
        <div className="services__pic">
          <img src={serviceObj.image} alt="UI Design" className="img-fluid" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default service;
