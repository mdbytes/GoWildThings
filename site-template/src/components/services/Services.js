import React, { Component } from "react";

import service from "./Service";
import servicesDetail from "./ServicesDetail";

class Services extends Component {
  render() {
    return (
      <div className="service-objects">
        {servicesDetail.map((obj) => (
          <div className="row service-item-row" key={obj.key}>
            {service(obj)}
          </div>
        ))}
      </div>
    );
  }
}

export default Services;
